const express = require("express");
const app = express();
const config = require("./config.js");
const morgan = require("morgan");
const path = require("path");

const admin = require("firebase-admin");
const serviceAccountKey = require("./serviceAccountKey");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey)
});
const urlRoutes = require("./routes/urlRoutes");

// set up firebase (dev and production version)

// create shortURL model for each url
  // unique ID (should be the original URL)
  // short URL
  // date created

// save each shortURL in firebase

// hashmap, map originalURL to shortURL 
// hash function must be one-to-one, so make sure id is unique, 
// use a set to store all ids

// if user tries to shorten a URL that has already been shortened,
// return the existing shortURL

// render all the urls in table

// middleware
process.env.NODE_ENV === "development" && app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "frontend/build")));

// routes

app.use("/urls/", urlRoutes);

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend/build/index.html"));
});

const LOCALHOST_PORT = 5000
const PORT = process.env.PORT || LOCALHOST_PORT;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
console.log("config: ", config);
