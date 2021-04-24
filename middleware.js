import dotenv from 'dotenv';

dotenv.config();

// define api key for query from .env
const SECRETKEY = process.env.SECRET_KEY;

//  Create customer middleware to check for api key
// in postman -> .../plants/?key=hi
export const securityCheck = (req, res, next) => {
  const apiKey = req.query.key;
  
  if (apiKey == SECRETKEY ) {
    // 2. Return all plants
    console.log("Security passed")
    next()
  } else {
    // 3. unauthorised!
    res.send(401, "Unauthorized")
  }
}

// logger
export const logRequest = (req, res, next) => {
  console.log(`There was a request to ${req.originalUrl}`);
  next()
}