import React from "react";
import "./Timeline.css";
import { Share } from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../dummyData";

const Timeline = () => {
  return (
    <div className="Timeline">
      <div className="timelineWrapper">
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} post={post} /> // Passing the post data to the Post component
        ))}
      </div>
    </div>
  );
};

export default Timeline;
