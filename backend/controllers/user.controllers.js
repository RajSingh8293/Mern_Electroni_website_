import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fileds are required",
      });
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(401).json({
        success: false,
        message: "User already exist",
      });
    }
    const hashPassword = bcrypt.hashSync(password, 8);
    const user = await User({
      username, // raj
      email, // raj@gmail.com
      password: hashPassword, // raj = hsajsajjh7832hjw892hjn saduids87hjwqq
    });
    await user.save();

    const token = jwt.sign({ _id: user?._id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    res
      .status(201)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
        sameSite: "None",
      })
      .json({
        success: true,
        message: "Register Successfully",
        user,
        token,
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something wrong with register user",
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fileds are required",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User does not exist",
      });
    }

    const comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid Data!",
      });
    }

    const token = jwt.sign({ _id: user?._id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
        sameSite: "None",
      })
      .json({
        success: true,
        message: "Log In Successfully",
        user,
        token,
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something wrong with login user",
    });
  }
};

export const logoutUser = async (req, res) => {
  try {
    return res
      .status(200)
      .cookie("token", "", {
        maxAge: 0,
        httpOnly: true,
        secure: true,
        sameSite: "None",
      })
      .json({
        success: true,
        message: "Logout Successfully",
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something wrong with logout user",
    });
  }
};

export const profileUser = async (req, res) => {
  try {
    // const user = await User.findOne(req.user?._id);
    const user = await User.findById(req.user?._id);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User Not Found!",
      });
    }
    // const token = jwt.sign({ _id: user?._id }, process.env.SECRET_KEY, {
    //   expiresIn: "1d",
    // });
    // return res
    //   .status(200)
    //   .cookie("token", token, {
    //     maxAge: 1 * 24 * 60 * 60 * 1000,
    //     httpOnly: true,
    //     secure: true,
    //     sameSite: "None",
    //   })
    res.json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something wrong with logout user",
    });
  }
};
export const updateUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    let user = await User.findOne(req.user?._id);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User Not Found!",
      });
    }

    user.username = username;
    user.email = email;

    // const updateUser = await User.findByIdAndUpdate(
    //   user,
    //   {
    //     $set: {
    //       username,
    //       email,
    //     },
    //   },
    //   { new: true }
    // );

    await user.save();
    return res.json({
      success: true,
      message: "Profile updated Successfully",
      user,
    });
    // return res
    //   .status(200)
    //   .cookie("token", "", {
    //     maxAge: 0,
    //     httpOnly: true,
    //     secure: true,
    //     sameSite: "None",
    //   })
    //   .json({
    //     success: true,
    //     message: "Profile updated Successfully",
    //     user,
    //   });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something wrong with logout user",
    });
  }
};
