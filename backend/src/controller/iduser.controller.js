const admin = require('firebase-admin');
const firebaseHelper = require('firebase-functions-helper/dist');

//Model

const db = admin.firestore();
const collectionName = 'iduser';

//Get 1 option
module.exports.getIduser = (req, res) => {
  const iduserId = req.params.iduserId;
  firebaseHelper
    .firestore
    .getDocument(db, collectionName, iduserId)
    .then(doc => res.status(200).send(doc))
    .catch(err => res.status(400).send('Error'));
};

//Get all options
module.exports.getOptions = async (req, res) => {
  let data = [];
  const optionsRef = db.collection(collectionName);
  await optionsRef.get()
    .then(snapshot => snapshot.forEach(doc => {
      data.push(doc.data());
    }))
    .then(doc => res.status(200).send(data))
    .catch(err => res.status(400).send('Error'));
};

//Create 1 option
module.exports.createIduser = (req, res) => {
  let data = req.body;
  
  firebaseHelper
    .firestore
    .createDocumentWithID(db, collectionName, data.iduserId, data)
    .then(doc => res.status(201).send(`Create iduser ${data.iduserId} Successfully !`))
    .catch(err => res.status(400).send('Error'));
};

//Update 1 option
module.exports.updateIduser = (req, res) => {
  const iduserId = req.params.iduserId;
  let data = req.body;

  firebaseHelper
    .firestore
    .updateDocument(db, collectionName, iduserId, data)
    .then(doc => res.status(200).send(`Update iduser ${iduserId} successfully !!!`))
    .catch(err => res.status(400).send('Error'));
};

//Delete 1 option
module.exports.deleteIduser = (req, res) => {
  const iduserId = req.params.iduserId;
  firebaseHelper
    .firestore
    .deleteDocument(db, collectionName, iduserId)
    .then(doc => res.status(200).send(`Delete iduser ${iduserId} successfully !!!`))
    .catch(err => res.status(400).send('Error'));
};