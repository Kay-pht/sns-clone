import { MoreVert } from "@mui/icons-material";
import React, { useState } from "react";
import "./Post.css";
import { Users } from "../../dummyData";

const Post = ({ post }) => {
  //   const user = Users.filter((user) => user.id === 1);
  //   console.log(user[0].username);

  const [likes, setLikes] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  function handleLike() {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={
                Users.filter((user) => user.id === post.userId)[0]
                  .profilePicture
              }
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">
              {Users.filter((user) => user.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft" onClick={handleLike}>
            <img src="./assets/heart.png" alt="" className="likeIcon" />
            <span className="postLikeCounter">{post.like + likes} likes</span>
          </div>
          <div className="postBottomRight">
            <span className="postComment">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
