// import middleware
import express from 'express';
import cors from 'cors';
// import controllers -> this is accessed like a class
import * as firebase_controller from "./controllers/firebase_controller.js";
import * as mongodb_controller from "./controllers/mongodb_controller.js";
// import custom middleware
import * as middleware from "./middleware.js";

// Setup express to listen on port 8080 -> this is middleware and intercepts requests so they are suitable
const app = express();
app.use(express.json());

// Listen on port Heroku PORt or 8080 for local
const PORT = process.env.PORT;
app.listen(PORT);

// Note: this is a security setting to allow incoming requests from anywhere :) Good for testing, bad for production
// can be configured to only accept requests from defines urls
app.use(cors());

// get app to use the security check
app.use(middleware.securityCheck);
app.use(middleware.logRequest);

//  ------------------------------
// # get options
// Get plants collection
app.get('/plants', firebase_controller.getPlants)

// Get plant document with plant id in url
app.get('/plants/:plantid', firebase_controller.getPlant)

//  ------------------------------
// # post/create plant option
app.post('/plants', firebase_controller.createPlant)

//  ------------------------------
// # update/put plant option
app.put('/plants/:plantid', firebase_controller.updatePlant)

//  ------------------------------
// # delete plant option
app.delete('/plants/:plantid', firebase_controller.deletePlant)

//  ------------------------------
// Mongodb requests

// # get all pubs
app.get('/pubs', mongodb_controller.getPubs)

// Get pub document with pub id in url
// app.get('/pubs/:pubid', mongodb_controller.getPub)

// //  ------------------------------
// // # post/create pub document
// app.post('/pubs', mongodb_controller.createPub)

// //  ------------------------------
// // # update/put plant option
// app.put('/pubs/:pubid', mongodb_controller.updatePub)

// //  ------------------------------
// // # delete plant option
// app.delete('/pubs/:pubid', mongodb_controller.deletePub)

// TO DO:
//    - use onFinished to create a function which checks firestore/firebase_controller response and depending on this, sends a status code.
//    - https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/
