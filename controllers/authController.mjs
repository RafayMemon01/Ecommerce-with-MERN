import { comparePassword, hashPassword } from "../helper/authHelper.mjs";
import userModel from "../models/userModel.mjs";
import JWT from "jsonwebtoken";

// register api
export const registerController = async (req, res) => {
  try {
    const { name, email, password, address, phone } = req.body;

    //check required Parameters
    if (!name || !email || !password || !address || !phone) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    //check existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        message: "User already exists please login",
        success: true,
      });
    }
    //create new user
    const hashedPassword = await hashPassword(password);
    // save
    const user = await new userModel({
      name,
      email,
      address,
      phone,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" }).send({
      success: false,
      message: "Error in Register User",
      error: error.message,
    });
  }
};

// login api

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // vaildation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "incorrect email or password",
      });
    }
    const user = await userModel.findOne({ email });
     //user yaha mil nhi rha nahi is ma password mil rha ha mene check bhi kia ha
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not registered",
      });
    }
    if ( !user.password) { //yaha pr check kia ha mene
      return res.status(500).send({
        success: false,
        message: "User object is missing password property",
      });
    }
    const match = comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Incorrect Password",
      });
    }
    //token generation
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { //token bhejte watq me user ka aik obj bhi bhej rha ho
      expiresIn: "5d",
    });
    res.status(200).send({
      success: true,
      message: "user login successfully",
      user: {
        name: user.name,//
        email: user.email,//

        phone: user.phone,//
        address: user.address,//
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in login user",
      error,
    });
  }
};



//test api

export const testController = (req, res) => {
  try {
    res.send("Protected Routes");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }

}
