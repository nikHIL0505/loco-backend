# loco-backend

Technologies Used
Database: MySQL
Object-Relational Mapping (ORM) Tool: Sequelize
Server Framework: Express.js

Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js installed
MySQL server installed and running
Basic knowledge of MySQL, Sequelize, and Express.js


Endpoint 1: Get a transaction using transaction id
Method: GET
Route: /transactionservice/transaction/:transaction_id
Description: Will return transaction details saved in DB {id, "", type:"", amount: number}

Endpoint 2: Get all transactions of a type
Method: GET
Route: /transactionservice/types/:type
Description: Will return ids of all transactions with requested type. [id1, id2]

Endpoint 3: Get sum of transitively linked transactions
Method: GET
Route: /transactionservice/sum/:transaction_id
Description: Will return sum of all child transactions of request transactionId. Ex. If transactionId of A is passed and A has 2 child B and C then B also has 2 childs D and E then thre final Sum will be sum(A) = B+C+D+E 

Endpoint 4: Update the details of a transaction
Method: PUT
Route: /transactionservice/transaction/:transaction_id
Description: Will update the details of a transaction in database

Endpoint 5: Create a new transaction
Method: POST
Route: /transactionservice/transaction
Description: This will create a new transaction in DB with values amount, type and parent transaction id reference.

