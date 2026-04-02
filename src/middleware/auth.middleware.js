const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

async function userIdentifire(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  let decoded = null;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: "unauthorized",
    });
  }

  const user = await userModel.findById(decoded.userID);

  if (!user) {
  return res.status(401).json({
    message: "Unauthorized"
  });
}

  req.user = user;







  next();
}

module.exports = userIdentifire;
