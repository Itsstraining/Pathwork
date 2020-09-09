const admin = require('firebase-admin');
const firebaseHelper = require('firebase-functions-helper/dist');
const auth = admin.auth();
const db = admin.firestore();

module.exports.shareBoardUserEmail = (req, res) => {
    console.log("----running share board")
    let arrayEmail = req.body.arrayEmail;
    let bid = req.body.bid;
    //parse array email to array object email
    try {
        arrayEmail = arrayEmail.map(element => {
            return { "email": element };
        });
        console.log(arrayEmail);
        auth.getUsers(arrayEmail).then(userRecord => {

            //sau khi da xac minh voi firebase rang user ton tai
            //thi chung ta thuc hien them boardid vao tung doc uid tuong ung
            // console.log(userRecord.users);
            // userRecord.users.forEach(user => {
            //     db.collection("users").doc(user.uid).update({
            //         "boardShared": admin.firestore.FieldValue.arrayUnion(bid)
            //     })
            // })
        }).then(()=>{
            res.status(200).send("OK");
        })
    }catch(err){
        console.log(err);
        res.status(405).send("Something Wrong")
    }
    
  }