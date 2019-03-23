var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 8889,
	user: 'root',
	password: 'root',
	database: 'bamazon_db'
});


function validateNum(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {//if not
		return 'Please enter a whole non-zero number.'; 
	}
}

function Purchase() { 
	inquirer.prompt([
		{
			type: 'input',
			name: 'item_id',
			message: 'Please enter the Item ID which you would like to purchase.',
			validate: validateNum,
			filter: Number
		},
		{
			type: 'input',
			name: 'stock_quantity',
			message: 'How many units would you like to buy?',
			validate: validateNum,
			filter: Number
		}

	]).then(function(input) {
		
		var item = input.item_id;
		var quantity = input.stock_quantity;

	
		var queryStr = 'SELECT * FROM products WHERE ?';

		connection.query(queryStr, {item_id: item}, function(err, data) {
			if (err) throw err;
			if (data.length === 0) {
				console.log('ERROR: Invalid Item ID. Please select a valid Item ID.'); 
				Inventory();
			} 
			else {
				var DB = data[0]; 
				if (quantity <= DB.stock_quantity) {
					console.log('Order placed!');
					var updateDB = 'UPDATE products SET stock_quantity = ' + (DB.stock_quantity - quantity) + ' WHERE item_id = ' + item; 
					connection.query(updateDB, function(err, data) {
						if (err) throw err;

						console.log('Your oder has been placed! Your total is $' + DB.price * quantity);
						console.log('Thank you for shopping with us!');
						console.log("\n---------------------------------------------------------------------\n");

				
						connection.end();
					})
				} else {
					console.log('Insufficient quantity!');
					console.log('Please modify your order.');
					console.log("\n---------------------------------------------------------------------\n");

					Inventory();
				}
			}
		})
	})
}


function Inventory() { 
	queryStr = 'SELECT * FROM products';
	connection.query(queryStr, function(err, data) {
		if (err) throw err;

		console.log('Existing Inventory: ');
		console.log('...................\n');

		var strOut = '';
		for (var i = 0; i < data.length; i++) {
			strOut = '';
			strOut += 'Item ID: ' + data[i].item_id + '  //  ';
			strOut += 'Product Name: ' + data[i].product_name + '  //  ';
			strOut += 'Department: ' + data[i].department_name + '  //  ';
			strOut += 'Price: $' + data[i].price + '\n';

			console.log(strOut);
		}
	  	Purchase();
	})
}

function runBamazon() {
	Inventory();
}

runBamazon();