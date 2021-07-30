# Capstone Presentation

## Application Purpose

The purpose of the application is to amplify the productivity of customer service representative (CSR) at Dronology. We created an application that allows CSR's to view details pertaining to a specific customer, create and modify both customers and their orders, and manage the functional lifecyle of all orders. 

## Sequence of Development
### Sprint 0
We conducted a design workshop where we came up with what to automate in our application, what business entities we would represent, the lifecycle of a customer order, and business contraints that would need to be implemented in our application.

We then presented the students with a Technical Specification document for the applications they would build, and covered how we would conduct the capstone.

In its simplicity, 

### Sprint 1 
Sprint 1 represented all the work that would be done before entry-level developers would typically start contributing to a project.

We had our instructors direct the students in that work, including:
- creating skeleton apps for both a React client and an Express API
- implementing Github repos for each app
- implementing CI/CD pipelines for each app, using Github Actions for running the pipelines and Azure App Service and Heroku for deployment
- building out the first user story, a full-stack feature to list all addresses. This gave the students a working example they could use in working their own user stories

### Sprint 2

For our second sprint we split the work between groups of 2-3 developers to tackle a variety of different user stories. The goal here was to get a barebones but functional application running. Below you can see what the user stories were and who was in charge of delivering them - 

- List all the customers addresses 
- Create a new address 
- Edit an existing address
- Delete an existing address
- List all the customers 
- Create a new customer
- Retrieve a specific customer's record
- Edit an existing customer
- Delete a customer 
- Search a customer by email
- Pagination for the customers page
- Retrieve an existing address by Id
- List all the products


### Sprint 3

Once we had an application running, it was time to add more logic to the application, style it, and start thinking about stretch goals. We also took a closer look at the application and put ourselves in the seat of a CSR to see if there was any other features we can add which would make the user experience more pleasant.

- List all orders
- Create a new order
- Retrive a specific order
- Edit an existing order
- Delete an order
- Retrieve a specific product
- Update product inventory
- Have an actual address show in customer details instead of Id
- Finalize/Syncronize styling
- Cleanup/refactor code
- Testing


## Design 

### API 

### Front End Design

### CI/CD Pipeline

The CI/CD pipeline will be managed through Github actions. 


### Unit Testing

### ORM and Database Schema


Our database schema contains three tables  -

##### addresses

- id 
- address_line_1 
- address_line_2
- city
- state
- zip

##### customers

- id 
- first_name
- middle_name
- last_name
- phone
- email
- notes
- address_id
##### products

- id
- sku
- price
- name
- quantity 
- description

## Developer's Experience


