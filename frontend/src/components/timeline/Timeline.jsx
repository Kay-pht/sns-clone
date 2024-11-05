import React, { useContext, useEffect, useState } from "react";
import "./Timeline.css";
import { Share } from "../share/Share";
import Post from "../post/Post";
// import { Posts } from "../../dummyData";
import axios from "axios";
import { AuthContext } from "../../state/AuthContext";

const Timeline = ({ username }) => {
  const [posts, setPosts] = useState([]); // Initializing an empty array to store posts
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get(`/posts/timeline/${user._id}`); // Assuming userId: 67223d53a834e01b3fa8888c for the home timeline
      setPosts(
        response.data.sort((post1, post2) => {
          return new Date(post2.createdAt) - new Date(post1.createdAt);
        })
      );
    };
    fetchPosts(); // Fetching posts on component mount
  }, [username, user._id]); // Fetching posts based on the username or the user's own timeline
  return (
    <div className="Timeline">
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post key={post._id} post={post} /> // Passing the post data to the Post component
        ))}
      </div>
    </div>
  );
};

export default Timeline;
