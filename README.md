# Back End API for Amex Customer Service Reps

## Setup instructions
- clone locally
- run ```npm install``` to install dependencies
- create local MySQL database ```csrdb```
- IMPORTANT: in ```src/sequelize/config/config.json```, change the development password to your own password
- run migrations from cli: ```npx sequelize-cli db:migrate```
- run seeders from cli: ```npx sequelize-cli db:seed:all```
- start app with ```npm start```
- app local URL is ```localhost:8080```
- test GET all addresses endpoint from ```/http/addresses.http```

## Development best practices
- BEFORE STARTING A NEW CODING SESSION, do this:
    - get latest: ```git pull origin [branch]```
    - install any new dependencies: ```npm install```
    - update database: ```npx sequelize-cli db:migrate``` 
    - update seeders: ```npx sequelize-cli db:seed:all```

## Source Control Management
> THIS IS EXTREMELY IMPORTANT. READ THIS BEFORE DOING ANY DEVELOPMENT

UNDER NO CIRCUMSTANCES SHOULD YOU COMMIT ANY CODE TO THE ```main``` branch out on the Github repo. 

You will do your work on a "feature branch" off of the ```main``` branch.

Code changes to the ```main``` branch are only to be accomplished by approval of a Pull Request (PR), asking for your ```feature``` branch to be merged into the ```main``` branch.

PRs may only be approved by Erik/Hou and two designated team leads.

## Workflow for User Stories
- Select a User Story from the Project Board and move it to "In Progress" on the board
  - Sprint 2: https://github.com/Kiresorg/amex-demo-server/projects/3
  - Sprint 3: https://github.com/Kiresorg/amex-demo-server/projects/4
- NOTE: You may need to create a user story for your task; review the existing stories well before doing so
> REMEMBER that we have TWO source control repos - front end and back end. The following branching/merging instructions apply to your work in both branches
- Front End repo: 
- Back End repo: https://github.com/Kiresorg/amex-cap-backend

- Create a feature branch off of ```main``` in the repo.
  - Name the feature branch like this:

    ```feature/[short-desc-of-feature]```
  - Example:

    ```feature/list-all-customers```
- Locally, pull repo changes with ```git pull origin [name-of-feature-branch]```

Example: ```git pull origin feature/list-all-customers```
- Locally, switch to the branch with ```git switch [name-of-feature-branch]```
Example: ```git switch feature/list-all-customers```
- Do your coding work. Commit locally and to the feature branch often. You will NOT trigger a build when committing to the feature branch on Github.
- When ready to merge your feature branch into ```main```, do the following:
  - Sync any changes in ```main``` into your feature branch as described here: https://www.togaware.com/linux/survivor/Git_Merge_Master_into.html. Make sure you resolve any conflicts.
  - create a Pull Request out on the appropriate repo (front end or back end)

> NOTE: When creating a PR, pay close attention to branches at the top of the PR; make sure you are requesting a merge FROM the ```feature``` branch INTO the ```main``` branch.
- Watch your email for comments on your PR
- When the PR is approved, YOU need to check the production web site to verify your feature works in prod.

## Live Production Site:
- Hosted on Azure App Service
- URL: https://amexcsrapi.azurewebsites.net/

## Live Production Database:
- MySQL server hosted on Azure
- Server name: mysql-amex.mysql.database.azure.com

## CI/CD pipeline:
We are using Github Actions for CI/CD. The workflow YAML file is in ```/.github/workflows/deploy.yml```
> DO NOT MODIFY THE ```deploy.yml```file !!!
When a push to the main branch occurs, the CI/CD pipeline will be kicked off.
## Reaching out for help (API)
- For help on API development, please reach out to Stephanie (API Lead) first; she will reach out to Erik/Hou as needed
### Applying Migrations and Seeders to Production dB
- WHen you need the production database schema changed, reach out to one of the following, in this order:
  - Robert (Back End Lead)
    - Erik
    - Hou

## API Endpoints
| Method | URLs | Actions |
| :---   | :--- |    :--- |
|  GET  |  api/customers  |  Get all customers  |
|  GET  |  api/customers/:id  |  Get specific customer  |
|  POST  |  api/customers  |  Create new customer  |
|  PUT  |  api/customers/:id  |  Modify existing customer  |
|  DELETE  |  api/customers/:id  |  Remove customer (data compliance/right to be forgotten)  |
|  GET  |  api/orders  |  Get all orders  |
|  GET  |  api/orders/:id  |  Get specific order  |
|  POST  |  api/orders  |  Create new order (think about how to differentiate between draft and live orders)  |
|  PUT  |  api/orders/:id  |  Modify existing order  |
|  DELETE  |  api/orders/:id  |  Delete a draft order (shouldn't allow for deletion of live orders)  |
|  GET  |  api/products  |  Get all products  |
|  GET  |  api/products/:id  |  Get specific product  |
|  PUT  |  api/products/:id  |  Increment/Decrement product inventory  |
|  GET  |  api/addresses  |  Get all addresses  |
|  GET  |  api/addresses/:id  |  Get specific address  |
|  POST  |  api/addresses  |  Create new address  |
|  PUT  |  api/addresses/:id  |  Modify existing address  |
|  DELETE  |  api/addresses/:id  |  Remove address  |


## Working with database schema migrations
- Manual: https://sequelize.org/master/manual/migrations.html

## Making new models and migrations
- If you are making a new model, just follow the manual above

## Making a migration for changes to an existing model
- First, make your changes to the model class
- Then, use this command to create a new skeleton migration file: ```npx sequelize-cli migration:create --name [name-of-migration]```
- In the new skeleton migration file, you will need to modify the ```up()``` function in it for the exact changes you made to the model, as well as the ```down()``` function to reverse those changes if needed
- Descriptions and code examples for the various model changes are here: https://sequelize.org/v3/docs/migrations/
- Here is a code example for your use: In our app, we wanted to change the size of the ```zip``` column in the ```address``` table from the default (255 characters) to a max of 40 characters. You can find this code in migration file ```20210720185312-change-zip-size``` in the project as well:

```javascript
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('addresses', 'zip', { 
      type: Sequelize.DataTypes.STRING(40)
    });
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.changeColumn('addresses', 'zip', {
        type: Sequelize.DataTypes.STRING
      });
  }
};
```

## Unit tests 
We set up Jest as our Unit Test framework. In order to use it, you need to do the following:
- Create a user on your MySQL server that the tests will run under. In your MySQL workbench, use the following command (MAKE SURE YOU PUT YOUR ADDRESS IN AT THE END):
```CREATE USER 'oldroot'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Password';```
- Create a test database called ```test-csrdb```. 
- Give the new ```oldroot``` user all possible permissions on the new ```test-csrdb``` database:
  - Go to Server/Users and Privileges
  - Select the ```oldroot``` user
  - On the right, select the "Schema Privileges" tab
  - Click "Select "ALL" at the bottom right
  - Click "Apply"
- In your ```src/sequelize/config/config.json``` file, put the above database/user/password info in the "test" key

You should now be able to run tests from the CLI with the command ```npm test```
