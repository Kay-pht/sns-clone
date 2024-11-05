import express from "express";
import User from "../models/User.js";

const router = express.Router();

// ユーザー情報の更新
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const targetUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("User updated successfully");
    } catch (error) {
      return res.status(500).json(error);
    }
  } else return res.status(401).json({ message: "Unauthorized" });
});
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const targetUser = await User.deleteOne({ _id: req.params.id });
      res.status(200).json("Deleted user successfully");
    } catch (error) {
      return res.status(500).json(error);
    }
  } else return res.status(401).json({ message: "Unauthorized" });
});
// router.get("/", async (req, res) => {
//   const userId = req.query.userId;
//   const username = req.query.username;
//   try {
//     const targetUser = await User.findOne({ _id: req.params.id });
//     const { password, updatedAt, ...rest } = targetUser._doc;
//     if (!targetUser) return res.status(404).json({ message: "User not found" });
//     else return res.status(200).json(targetUser._doc);
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// });

//Get user info by query
router.get("/", async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;

  try {
    const targetUser = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    const { password, updatedAt, ...rest } = targetUser._doc;
    // if (!targetUser) return res.status(404).json({ message: "User not found" });
    return res.status(200).json(targetUser._doc);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.put("/:id/follow", async (req, res) => {
  if (req.body.userId === req.params.id) {
    return res.status(400).json({ message: "You can't follow yourself" });
  } else {
    try {
      const targetUser = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!targetUser.followers.includes(currentUser._id)) {
        await targetUser.updateOne({ $push: { followers: currentUser._id } });
        await currentUser.updateOne({ $push: { followings: targetUser._id } });
        res.status(200).json("Followed successfully");
      } else return res.status(400).json({ message: "Already following" });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
});
router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId === req.params.id) {
    return res.status(400).json({ message: "You can't unfollow yourself" });
  } else {
    try {
      const targetUser = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (targetUser.followers.includes(currentUser._id)) {
        await targetUser.updateOne({ $pull: { followers: currentUser._id } });
        await currentUser.updateOne({ $pull: { followings: targetUser._id } });
        res.status(200).json("Unfollow successfully");
      } else return res.status(400).json({ message: "Already unfollow" });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
});

export default router;
