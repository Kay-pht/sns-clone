import express from "express";
import errorWrapper from "../helpers/helper.js";
import User from "../models/User.js";

const router = express.Router();

router.post(
  "/register",
  errorWrapper(async (req, res) => {
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    //save user
    const user = await newUser.save();
    return res.status(200).json(user);
  })
);

router.post(
  "/login",
  errorWrapper(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).send("user not found");
    const validPassword = req.body.password === user.password;

    if (!validPassword) return res.status(400).json("password is not correct");

    return res.status(200).json(user);
  })
);

export default router;
