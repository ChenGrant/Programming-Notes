const firebase = require("firebase-admin");
const { getFirestore } = require("firebase-admin/firestore");
const { getAuth } = require("firebase-admin/auth");

const serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
});

const db = getFirestore();

db.collection("users")
  .doc("alovelace")
  .set({
    first: "Ada",
    last: "Lovelace",
    born: 18152,
  })
  .then(() => console.log("hey"));

getAuth()
  .getUser("sdsd")
  .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
  })
  .catch((error) => {
    console.log('Error fetching user data:', error);
  });