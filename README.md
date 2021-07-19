# Back End API for Amex Customer Service Reps

## Setup instructions
- clone locally
- run ```npm install``` to install dependencies
- create local MySQL database ```csrdb```
- run migrations from cli: ```npx sequelize-cli db:migrate```
- run seeders from cli: ```npx sequelize-cli db:seed:all```
- IMPORTANT: in ```src/sequelize/config/config.json```, change the development password to your own
- start app with ```npm start```
- test GET all addresses endpoint from ```/http/addresses.http```

## Development best practices
- BEFORE WRITING ANY NEW CODE, do this:
    - get latest: ```git pull origin [branch]```
    - install any new dependencies: ```npm install```
    - update database: ```npx sequelize-cli db:migrate``` 
    - update seeders: ```npx sequelize-cli db:seed:all```
    