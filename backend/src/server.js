const app = require("express")();
const bodyParser = require("body-parser");
var admin = require("firebase-admin");
const cors = require("cors");
var serviceAccount = require("../key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://trello-server-326e2.firebaseio.com",
});
app.use(cors());
app.get("/ping", (req, res) => {
  res.send("hello");
});
app.use(bodyParser());
app.listen(7762, "127.0.0.1", () => {
  console.log("server is running");
});
app.post("/v1/board", async (req, res) => {
  const list = req.body;
  try {
    let doc = admin.firestore().collection("board").doc(list.task);
    if ((await doc.get()).exists) {
      res.send(list.task + " is already existed");
    } else {
      doc.set(list);
      res.send(list.task + " is created");
    }
  } catch (e) {
    res.send("Failed to create " + list.task);
  }
});
app.get("/v1/board", async (req, res) => {
  const list = req.body;
  try {
    let listDocList = await admin
      .firestore()
      .collection("board")
      .listDocuments();
    let listList = [];
    for (let i = 0; i < listDocList.length; i++) {
      listList.push((await listDocList[i].get()).data());
    }
    res.send({
      list: listList,
    });
  } catch (e) {
    res.send({
      list: [],
    });
  }
});
app.get("/v1/board", async (req, res) => {
  const { task } = req.query;
  if (task == undefined) {
    res.send({
      message: "Please set the list task",
    });
    return;
  }
  let data = await admin.firestore().collection("board").doc(task).get().data();
  res.send({
    data: data,
  });
});

app.put("/v1/board/:task", async (req, res) => {
  const { task } = req.params;
  if (task == undefined) {
    res.send({
      message: "Please set the list task",
    });
    return;
  }
  let doc = admin.firestore().collection("board").doc(task);
  if ((await doc.get()).exists) {
    if (task == req.body.task) {
      try {
        await doc.set(req.body);
        res.send({
          message: "Updated successfully",
        });
        return;
      } catch {
        res.send({
          message: "Fail to update",
        });
        return;
      }
    }
    res.send({
      message: "task is not match",
    });
    return;
  }
  res.send({
    message: "task is not exist",
  });
});
app.delete("/v1/board/:task", async (req, res) => {
  const { task } = req.params;
  if (task == undefined) {
    res.send({
      message: "Please set the list task",
    });
    return;
  } else {
    await admin.firestore().collection("board").doc(task).delete();
    res.send(list.task + " is deleted");
  }
});

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