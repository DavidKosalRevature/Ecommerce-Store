# Project2
E-commerce store that lets users create an account and view products, add products to cart and checkout their cart. Users can also create employee acccounts that can view all users and view all orders

# Technologies Used
* HTML
* CSS
* Bootstrap
* Angular 10
* Spring Boot
* MySQL

# Features
* Users can register a Customer or Employee account
* Users can log in and log out
* Users can browse products and add to cart but must be logged in to checkout cart
* Employees can also view a list of all users and a list of order history from all customers
* Items checkouted will be saved to the Orders table in the database 

### Work in Progress
* Allow orders to save multiple items per customer instead of only 1 item per customer
* Add a total amount at the bottom of the cart
* Make QoL changes so users don't have to refresh to use some features
* Add delete and edit functionality for Employee accounts

# Getting Started
https://github.com/DavidKosalRevature/Project2.git

# Usage
* Run both Spring Boot and Angular with separate local host ports
* Set origin in Spring Boot to the Angular local host
* Set url in services in Angular to Spring boot local host
* Configure tomcat server in Spring Boot
* Open the browser to the address of the Angular local host
* Click on the nav bar links to navigate the site
