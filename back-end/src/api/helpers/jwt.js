import jwt from "jsonwebtoken";
require("dotenv").config();

// generate tokens :
export const createToken = (payload = null, role = null) => {
  if (!payload) return null;
  if (!role) return null;
  switch (role) {
    case "ADMIN":
      return jwt.sign(payload, process.env.SECRET_KEY_MANAGER, {
        expiresIn: "1h",
      });
    case "FORMER":
      return jwt.sign(payload, process.env.SECRET_KEY_FORMER, {
        expiresIn: "1h",
      });
    case "CUSTOMER":
      return jwt.sign(payload, process.env.SECRET_KEY_CUSTOMER, {
        expiresIn: "1h",
      });
    default:
      return null;
  }
};

export const verifyToken = (token = null, role = null) => {
  if (!token) return null;
  if (!role) return null;
  try {
    switch (role) {
      case "ADMIN":
        return jwt.verify(token, process.env.SECRET_KEY_MANAGER);
        break;
      case "FORMER":
        return jwt.verify(token, process.env.SECRET_KEY_FORMER);
        break;
      case "CUSTOMER":
        return jwt.verify(token, process.env.SECRET_KEY_CUSTOMER);
        break;
      default:
        return null;
    }
  } catch (err) {
    return null;
  }
};
