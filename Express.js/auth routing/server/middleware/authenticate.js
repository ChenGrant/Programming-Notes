const admin = require("firebase-admin");
const auth = admin.auth();

const authenticate = (request, response, next) => {
  const headerToken = request.headers.authorization;
  if (!headerToken) {
    return response.send({ message: "No token provided" }).status(401);
  }

  if (headerToken.split(" ")[0] !== "Bearer") {
    return response.send({ message: "Invalid token" }).status(401);
  }

  const token = headerToken.split(" ")[1];

  if (token === undefined) {
    return response.send({ message: "Invalid token" }).status(401);
  }

  auth
    .verifyIdToken(token)
    .then(() => {
      next();
    })
    .catch(() => response.send({ message: "Could not authorize" }).status(403));
};

module.exports = authenticate;
