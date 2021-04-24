#DOCUMENTATION

Overview: 
- Created an api for ... 
- Used node.js and firestore
- Project structure consists of MVC model and middleware file

Packages used: 
- firebase -> firestore (auth)
- node
- express
- cors
- mongodb
- dotenv
- heroku CLI

Scripts:
1. 'npm dev': Used for development mode running nodemon and index.js
2. 'npm start': Used for deploying in either local production mode or Heroku

Setup:
1.  Initialize node -> : npm init
2.  initialize firebase -> : firebase init
    - make sure to select use of firestore
3.  install cors and express -> : npm install express cors 

Deployment: 
  https://dev.to/vanwildemeerschbrent/how-to-deploy-your-node-app-api-on-heroku-44n6

- Procfile: Heroku file that defines the dynos settings for your project. The content of your Procfile will define how Heroku will start your Node app. Contains script: npm start.

Use:
- use api to access information
  - This may be a collection of documents or a single document
- key is required for access and is set in middleware.js
- index.js file intercepts requests to api.
- This recieves each request and depending on the url, calls a function from the controller.js
- In controller.js, logic is performed and then calls a function with rest methods from model.js
- In model.js, this fetched data from firestore and returns it to the controller.js.

# MVC-node-API
