const { getFirestore } = require("firebase-admin/firestore");
const uuid = require("uuid");
const assert = require("assert");

const firestore = getFirestore();
const FIRESTORE_URL_COLLECTION_NAME = "urls";

// generateRandomNumber generates a random integer
// between min (inclusive) and max(inclusive)
const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// getExistingIds returns a Set of ids of all the existing
// URLs in firestore
const getExistingIds = async () => {
  const existingIDsSet = new Set();
  const snapshot = await firestore
    .collection(FIRESTORE_URL_COLLECTION_NAME)
    .get();
  snapshot.forEach((doc) => existingIDsSet.add(doc.data().id));
  return existingIDsSet;
};

const generateRandomID = async () => {
  const existingIDsSet = await getExistingIds();

  const ID_LENGTH = 5;
  const max = Math.pow(10, ID_LENGTH) - 1;
  const min = Math.pow(10, ID_LENGTH - 1);

  while (true) {
    const id = generateRandomNumber(min, max);
    if (existingIDsSet.has(id.toString())) {
      console.log("ID ALREADY IN USE: ", id);
      continue;
    }
    return id.toString();
  }
};

class URL {
  constructor(url) {
    return (async () => {
      this.id = await generateRandomID();
      this.url = url;
      this.createdAt = new Date();
      console.log("Created new URL instance:", this);
      return this;
    })();
  }
  async save() {
    try {
      await firestore
        .collection(FIRESTORE_URL_COLLECTION_NAME)
        .doc(this.id)
        .set({ ...this });
      console.log("Added URL instance to firestore: ", this);
    } catch (err) {
      console.log("ERROR");
      console.log(err.message);
    }
  }
  static async getAll() {
    try {
      const urls = [];
      const snapshot = await firestore
        .collection(FIRESTORE_URL_COLLECTION_NAME)
        .orderBy('createdAt', 'desc')
        .get();
      snapshot.forEach((doc) => urls.push(doc.data()));
      console.log("All URLS: ", urls);
      return urls;
    } catch (err) {
      console.log("ERROR");
      console.log(err.message);
    }
  }
  static async getFromID(id) {
    const snapshot = await firestore
      .collection(FIRESTORE_URL_COLLECTION_NAME)
      .where("id", "==", id)
      .get();

    const urls = [];
    snapshot.forEach((doc) => urls.push(doc.data()));
    const [url] = urls;
    console.log(`URL fetched with id of ${id}`, url);
    return url;
  }
}

module.exports = URL;
