import admin from "firebase-admin";
// import key from service key file **sensitive**
import { serviceAccount } from "../serviceAccountKey.js";

// initialize app with admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// configure firestore from admin sdk which allows you to interact with firebase from a priviliged environment
const firestore = admin.firestore();

// --------------------------
export const getCollection = (res, collectionName) => {
  let items = [];
  return firestore.collection(collectionName).get()
  .then(response => 
    { response.docs.forEach(doc => {
        items.push(doc.data());
      })
    })
  .then(data => res.send(items))
  .catch(error => {
    res.send(400, "error")
  })
}

export const getDocument = (collectionName, docId) => {
  return firestore.collection(collectionName).doc(docId).get()
  .then(item => {
    return item.data()
  })
}

// --------------------------
export const createDocument = (res, collectionName, newData) => {
  return firestore.collection(collectionName).doc().set(newData)
  .then(response => {
    res.send(newData)
  }).catch(error => {
    res.send(400, "error")
  })
}

// --------------------------
export const updateDocument = (res, collectionName, docId, newData) => {
  return firestore.collection(collectionName).doc(docId).update(newData)
  .then(response => {
    return res.send("update successful")
  })
  .catch(error => {
    res.send(400, "error")
  })
}

// --------------------------
export const deleteDocument = (res, collectionName, docId) => {
  return firestore.collection(collectionName).doc(docId).delete()
  .then(response => {
    res.send(`document ${docId} was succesffully deleted`)
  })
  .catch(error => {
    res.send(400, "error")
  })
}