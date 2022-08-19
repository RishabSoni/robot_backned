## Project Setup 

In the project directory, start with comman:

### `npm install`

This will install the dependencies.
Then you need to install mysql2 manually. 

### `npm install mysql2`

This will install mysql2 dependency for sequelizer. 
(Note: This is not mysql databse, you need to install mysql server separately. )

## Database
Install any mysql server e.g. phpMyAdmin
Create migration for your tables.

Use migration 

### `sequelize db:migrate`

### `sequelize db:seed:all`