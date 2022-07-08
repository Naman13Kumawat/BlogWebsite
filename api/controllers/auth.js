import User from "../models/User.js";
import { createError } from "../utils/error.js";

export const register = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    const mongoErrCode = err.message.slice(0, 6);
    const index = err.message.slice(57).indexOf("_")
    const duplicacyIn = err.message.slice(57).slice(0, index); 
    if (mongoErrCode === "E11000") {
      next(createError(409, `User already exist with this ${duplicacyIn}!`));
    } else {
      next(err);
    }
  }
};
