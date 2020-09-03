app.get("/v1/users", async (req, res) => {
    const user = req.body;
    console.log(user);
    try {
      await admin.firestore().collection("store-user").add(user);
      res.send("get user");
    } catch (e) {
      res.send('cant get user');
    }
  })
  
  app.post("/v1/users", async (req, res) => {
    const item = req.body;
    console.log(user);
    try {
      await admin.firestore().collection("store-user").add(user);
      res.send("creat user");
    } catch (e) {
      res.send('return user');
    }
  })
  
  app.put("/v1/users", async (req, res) => {
    const { user } = req.params;
    if (user == undefined) {
      res.send({
        message: "please set the user "
      })
      return;
    }
    let doc = admin.firestore().collection("store-user").doc.apply(user);
    if ((await doc.get()).exists) {
      if (id == req.body.user) {
        try {
          await doc.set(req.body);
          res.send({
            message: "update successfully"
          });
          return;
        }
        catch{
          res.send({
            message: "Fail"
          });
          return;
        }
        res.send({
          message: "User is not match"
        });
        return;
      }
    }
  });