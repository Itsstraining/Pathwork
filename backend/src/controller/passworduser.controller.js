const admin = require('firebase-admin');
const firebaseHelper = require('firebase-functions-helper/dist');



const db = admin.firestore();
const collectionName = 'purchase-orders';


module.exports.getPassworduser = async (req, res) => {
    let data = [];
    const nameuserRef = db.collection(collectionName);
    await nameuserRef.get()
        .then(snapshot => snapshot.forEach(doc => {
            data.push(doc.data());
        }))
        .then(doc => res.status(200).send(data))
        .catch(err => res.status(400).send('Error'));
}


module.exports.getPassworduser = (req, res) => {
    const passworduserId = req.params.passworduserId;

    firebaseHelper
        .firestore
        .checkDocumentExists(db, collectionName, passworduserId)
        .then(result => {
            if (result.exists) {
                firebaseHelper
                    .firestore
                    .getDocument(db, collectionName, passworduserId)
                    .then(doc => res.status(200).send(doc))
                    .catch(err => res.status(400).send('Error'));
            }
        })
        .catch(err => res.status(400).send(`Do not have password now ${passworduserId}`));
}


module.exports.createPassworduser= (req, res) => {
    let data = req.body;

    if (data) {
        data['passworduserTimeCreated'] = new Date().toLocaleDateString("en-US");
        data['passwordusertus'] = data['passworduserStatus'][0].name;
        data['passwordusernumber'] = data['passwordusertuss'][0].number;

        firebaseHelper
            .firestore
            .createNewDocument(db, collectionName, data)
            .then(doc => {
                data.passworduserId = doc.id;
                firebaseHelper
                    .firestore
                    .updateDocument(db, collectionName, data.passworduserId, data)
                    .then(doc => res.status(200).send(`Create passworduser ${data.passworduserId} Successfully !`))
                    .catch(err => res.status(400).send('Error'));
            })
            .catch(err => res.status(400).send('Error'));
    }

}

//Update 1 purchase-orders
module.exports.updatePassworduser = (req, res) => {
    const passworduserId = req.params.passworduserId;
    const data = req.body;

    firebaseHelper
        .firestore
        .checkDocumentExists(db, collectionName, passworduserId)
        .then(result => {
            if (result.exists) {
                data['passworduserStatus'] = data['createpassworduser'][0].name;
                data['createpassworduser'] = data['createpassworduser'][0].name;

                firebaseHelper
                    .firestore
                    .updateDocument(db, collectionName, passworduserId, data)
                    .then(doc => res.status(200).send(`Update passworduser ${data.passworduserId} Successfully !`))
                    .catch(err => res.status(400).send('Error'));
            }
        })
        .catch(err => res.status(400).send('Error'));
}

module.exports.deletePassworduser = (req, res) => {
    const passworduserId = req.params.passworduserId;

    firebaseHelper
        .firestore
        .checkDocumentExists(db, collectionName, passworduserId)
        .then(result => {
            if (result.exists) {
                firebaseHelper
                    .firestore
                    .deleteDocument(db, collectionName, passworduserId)
                    .then(doc => res.status(200).send(`Delete passworduser ${passworduserId} Successfully !`))
                    .catch(err => res.status(400).send('Error'));
            }
        })
        .catch(err => res.status(400).send(`Do not have purchase-orders ${passworduserId}`));
}