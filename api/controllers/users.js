import User from "../models/User.js";

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const createUser = async (req, res, next) => {
    try{
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).json(newUser);
    }catch (err) {
        next(err);
    }
}
