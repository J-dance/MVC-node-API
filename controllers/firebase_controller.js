import * as model from "../models/firebase_model.js";

// response is plant collection
export const getPlants = (req, res) => {
  return model.getCollection(res, 'plants')
}

// response is plant document
export const getPlant = async (req, res) => {
  let plantId = req.params.plantid;
  const plants = await model.getDocument('plants', plantId)
  res.send(plants)
}

// response should be the entity
export const createPlant = (req, res) => {
  const plantData = req.body;
  return model.createDocument(res, 'plants', plantData);
}

// response should be the entity
export const updatePlant = (req, res) => {
  let plantId = req.params.plantid;
  const plantData = req.body;
  return model.updateDocument(res, 'plants', plantId, plantData);
}

export const deletePlant = (req, res) => {
  let plantId = req.params.plantid;
  return model.deleteDocument(res, 'plants', plantId);
}