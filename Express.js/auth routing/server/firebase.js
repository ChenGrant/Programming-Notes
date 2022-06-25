const path = require("path");
const admin = require("firebase-admin");
const config = require("./config.js");
//firebase
const serviceAccount = require(path.join(__dirname, config.FIREBASE_SDK_PATH));
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
