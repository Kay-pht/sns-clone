import React from "react";

const FollowRecommendations = ({ user }) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="sideBarFriend">
      <img
        src={PUBLIC_FOLDER + user.profilePicture}
        alt=""
        className="sidebarFriendImg"
      />
      <span className="sideBarFriendName">{user.username}</span>
    </li>
  );
};

export default FollowRecommendations;
