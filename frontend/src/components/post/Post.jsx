import { MoreVert } from "@mui/icons-material";
import React, { useContext, useEffect, useState } from "react";
import "./Post.css";
import axios from "axios";
// import { Users } from "../../dummyData";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../state/AuthContext";

const Post = ({ post }) => {
  //   const user = Users.filter((user) => user.id === 1);
  //   console.log(user[0].username);
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  const [likes, setLikes] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  async function handleLike() {
    try {
      await axios.put(`/posts/${post._id}/like`, {
        userId: currentUser._id,
      });
      // console.log(response);
    } catch (error) {
      console.log(error);
    }

    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  }
  const [user, setUsers] = useState({}); // Initializing an empty array to store posts
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`/users?userId=${post.userId}`);
      setUsers(response.data);
    };
    fetchUsers(); // Fetching posts on component mount
  }, [post.userId]);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                src={
                  user.profilePicture
                    ? PUBLIC_FOLDER + user.profilePicture
                    : PUBLIC_FOLDER + "/person/noAvatar.png"
                }
                alt=""
                className="postProfileImg"
              />
            </Link>

            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={PUBLIC_FOLDER + post.image} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft" onClick={handleLike}>
            <img
              src={PUBLIC_FOLDER + "/heart.png"}
              alt=""
              className="likeIcon"
            />
            <span className="postLikeCounter">
              {post.likes.length + likes} likes
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postComment">1 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
