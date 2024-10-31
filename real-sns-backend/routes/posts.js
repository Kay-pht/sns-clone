import express from "express";
import Post from "../models/Post.js";
import User from "../models/User.js";

const router = express.Router();

//投稿を作成する
router.post("/", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const post = await newPost.save();
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const targetPost = await Post.findById(req.params.id);
    if (targetPost.userId === req.body.userId) {
      await targetPost.updateOne({ $set: req.body });
      res.status(200).json("Post updated successfully");
    } else return res.status(401).json({ message: "Unauthorized" });
  } catch (error) {
    return res.status(500).json(error);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const targetPost = await Post.findById(req.params.id);
    if (targetPost.userId === req.body.userId) {
      await targetPost.deleteOne();
      return res.status(200).json("Post deleted successfully");
    } else return res.status(401).json({ message: "Unauthorized" });
  } catch (error) {
    return res.status(500).json("Error deleting post");
  }
});
router.get("/:id", async (req, res) => {
  try {
    const targetPost = await Post.findById(req.params.id);
    console.log(targetPost);
    if (targetPost) {
      res.status(200).json(targetPost);
    } else return res.status(401).json({ message: "Not found" });
  } catch (error) {
    return res.status(500).json("Error deleting post");
  }
});

router.put("/:id/like", async (req, res) => {
  try {
    const targetPost = await Post.findById(req.params.id);
    if (!targetPost.likes.includes(req.body.userId)) {
      await targetPost.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("Post liked successfully");
    } else {
      await targetPost.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("Post unliked successfully");
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.get("/timeline/all", async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userPosts = await Post.find({ userId: currentUser._id });

    const followingUsers = currentUser.followings;
    // const timelinePosts = await Post.find({
    //   userId: { $in: [currentUser._id, ...followingUsers] },
    // });
    const friendsPosts = await Promise.all(
      followingUsers.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    return res.status(200).json(userPosts.concat(...friendsPosts));
  } catch (error) {
    return res.status(500).json("No timeline posts found");
  }
});

export default router;
