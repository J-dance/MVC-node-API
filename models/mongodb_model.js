import mongodb from 'mongodb';
import dotenv from 'dotenv';

// configure the enviromental variables ** sensitive data **
dotenv.config();

const mongoClient = mongodb.MongoClient;

// connection string required to connect to cluster from .env 
const connectionString = process.env.MONGO_CONNECTION_STR;

export const getCollection = async (res, dbName, collectionName) => {
  // connect to mongo client to get data
  const mongo = await mongoClient.connect(connectionString);
  // gets data -> {} is everything in location and places in array
  const collection = await mongo.db(dbName).collection(collectionName).find({}).toArray();
  // You must close the connection to database, as limited number of connections
  mongo.close();
  res.send(collection);
  return;
}



