const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.resolve(__dirname, `env\\${process.env.NODE_ENV}.env`),
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  LOCAL_HOST_PORT: process.env.LOCAL_HOST_PORT,
  MONGODB_ATLAS_URI: process.env.MONGODB_ATLAS_URI,
  FIREBASE_SDK_PATH : `env\\${process.env.NODE_ENV}FirebaseAdminSDK.json`
};
