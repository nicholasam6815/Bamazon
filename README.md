# Bamazon
## Instructions

### Challenge #1: Customer View (Minimum Requirement)

1. Create a MySQL Database called `bamazon`.

2. Then create a Table inside of that database called `products`.

3. The products table should have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).
<img width="1241" alt="Screen Shot 2019-03-19 at 10 25 05 PM" src="https://user-images.githubusercontent.com/44181627/54791517-a0a70980-4c10-11e9-9594-f6b73addab7d.png">


5. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

6. The app should then prompt users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.
<img width="1382" alt="Screen Shot 2019-03-19 at 10 39 08 PM" src="https://user-images.githubusercontent.com/44181627/54791504-95ec7480-4c10-11e9-8eed-bc97ecd9b841.png">
7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
<img width="1388" alt="Screen Shot 2019-03-19 at 10 40 39 PM" src="https://user-images.githubusercontent.com/44181627/54791493-89681c00-4c10-11e9-8e4f-c6c489045370.png">
   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.
   
8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.
   <img width="1312" alt="Screen Shot 2019-03-19 at 10 46 12 PM" src="https://user-images.githubusercontent.com/44181627/54791484-82410e00-4c10-11e9-9da9-1781024f9ce8.png">
