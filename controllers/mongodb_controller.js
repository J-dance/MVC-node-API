import * as model from "../models/mongodb_model.js";

// response is pub collection
export const getPubs = (req, res) => {
  // pass the db name and collection name
  return model.getCollection(res, 'pubs_db', 'bristol')
}

// response is pub document
// export const getPub = async (req, res) => {
//   let pubId = req.params.pubid;
//   const pub = await model.getDocument('pubs', pubId)
//   res.send(pub)
// }

// // response should be the entity
// export const createpub = (req, res) => {
//   const pubData = req.body;
//   return model.createDocument(res, 'pubs', pubData);
// }

// // response should be the entity
// export const updatepub = (req, res) => {
//   let pubId = req.params.pubid;
//   const pubData = req.body;
//   return model.updateDocument(res, 'pubs', pubId, pubData);
// }

// export const deletepub = (req, res) => {
//   let pubId = req.params.pubid;
//   return model.deleteDocument(res, 'pubs', pubId);
// }