const admin = require("firebase-admin");
const auth = admin.auth();
const mongoose = require("mongoose");

const getUserFromRequest = async (request) => {
  const token = request.headers.authorization.split(" ")[1];
  const user = await auth.verifyIdToken(token);
  return user;
};

const uidIsAdmin = async (uid) => {
  const user = await mongoose.connection.db
    .collection("users")
    .findOne({ uid: uid });
  
  return user.isAdmin
};

const isAdmin = async (request, response, next) => {
  const user = await getUserFromRequest(request);
  const { uid } = user;
  const isAdmin = await uidIsAdmin(uid)
  if (isAdmin) {
    return next()
  }
  return response.send({ message: "User is not admin" }).status(401);
};

module.exports = isAdmin;
