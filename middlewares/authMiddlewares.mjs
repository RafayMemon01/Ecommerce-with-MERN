import JWT from "jsonwebtoken";
import userModel from "../models/userModel.mjs";

//middleWare for Route protection
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

//middleware for admin access

export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        message: "Unauthorized Access",
        success: false,
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
        success: false,
        error,
        message: "Error in admin middleware",
    })
  }
};
