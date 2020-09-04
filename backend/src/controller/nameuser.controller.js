const admin = require('firebase-admin');
const firebaseHelper = require('firebase-functions-helper/dist');

//Model

const db = admin.firestore();
const collectionName = 'nameuser';

//Get 1 product
module.exports.getNameuser = (req, res) => {
  const nameuserId = req.params.nameuserId;

  firebaseHelper
    .firestore
    .checkDocumentExists(db, collectionName, nameuserId)
    .then(result => {
      if (result.exists) {
        firebaseHelper
          .firestore
          .getDocument(db, collectionName, nameuserId)
          .then(doc => res.status(200).send(doc))
          .catch(err => res.status(400).send('Error'));
      }
    })
    .catch(err => res.status(400).send(`Do not have name ${nameuserId}`));
};

//Get all product
module.exports.getNameuser = async (req, res) => {
  let data = [];
  const productsRef = db.collection(collectionName);
  await productsRef.get()
    .then(snapshot => snapshot.forEach(doc => {
      data.push(doc.data());
    }))
    .then(doc => res.status(200).send(data))
    .catch(err => res.status(400).send('Error'));
};

//Create 1 product
module.exports.createNameuser = (req, res) => {
  let data = req.body;
  if (data) {
    data['nameuserTimeCreated'] = new Date().toLocaleDateString("en-US")
    data['nameuserStatus'] = 'FULLMEMBER';

    data['nameuserMark'] = data['nameuserMark'][0].name;
    data['nameuserOrigin'] = data['nameuserOrigin'][0].name;
   

    firebaseHelper
      .firestore
      .createNewDocument(db, collectionName, data)
      .then(doc => {
        data.nameuserId = doc.id;
        firebaseHelper
          .firestore
          .updateDocument(db, collectionName, data.nameuserId, data)
          .then(doc => res.status(201).send(`Create nameuser ${data.nameuserId} Successfully !`))
          .catch(err => res.status(400).send('Error'));
      })
      .catch(err => res.status(400).send('Error'));
  }
};

//Update 1 product
module.exports.updateNameuser = async (req, res) => {
  const nameuserId = req.params.nameuserId;
  let data = req.body;

  let firebaseData = await firebaseHelper
    .firestore
    .getDocument(db, collectionName, nameuserId)
    .then(doc => doc)
    .catch(err => err);

  if (firebaseData) {
    if (firebaseData['nameuserAmount'] && firebaseData['nameuserAmount'] > 0) {
      data['nameuserAmount'] += firebaseData['nameuserAmount'];
      if (data['nameuserAmount'] <= 10) {
        data['nameuserStatus'] = 'CANTCREATEMEMBERSHIP';
      }
      if (data['nameuserAmount'] > 10) {
        data['nameuserStatus'] = 'CANCREATEMEMBERSHIP';
      }
    }

    firebaseHelper
      .firestore
      .updateDocument(db, collectionName, nameuserId, data)
      .then(doc => res.status(200).send(`Update nameuser ${nameuserId} successfully !!!`))
      .catch(err => res.status(400).send('Error'));
  }
};

//Delete 1 product
module.exports.deleteNameuser = (req, res) => {
  const nameuserId = req.params.nameuserId;

  firebaseHelper
    .firestore
    .checkDocumentExists(db, collectionName, nameuserId)
    .then(result => {
      if (result.exists) {
        firebaseHelper
          .firestore
          .deleteDocument(db, collectionName, nameuserId)
          .then(doc => res.status(200).send(`Delete nameuser ${nameuserId} successfully !!!`))
          .catch(err => res.status(400).send('Error'));
      }
    })
    .catch(err => res.status(400).send(`Do not have memebership ${nameuserId}`));
};