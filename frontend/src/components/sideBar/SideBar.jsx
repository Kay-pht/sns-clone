import {
  Bookmark,
  Home,
  MessageRounded,
  Notifications,
  Person,
  Search,
  Settings,
} from "@mui/icons-material";
import React from "react";
import "./SideBar.css";
import FollowRecommendations from "../followRecommendations/FollowRecommendations";
import { Users } from "../../dummyData";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <Home className="sideBarIcon" />
              <span className="sideBarListItemText">Home</span>
            </Link>
          </li>
          <li className="sideBarListItem">
            <Search className="sideBarIcon" />
            <span className="sideBarListItemText">Search</span>
          </li>
          <li className="sideBarListItem">
            <Notifications className="sideBarIcon" />
            <span className="sideBarListItemText">Notifications</span>
          </li>
          <li className="sideBarListItem">
            <MessageRounded className="sideBarIcon" />
            <span className="sideBarListItemText">Message</span>
          </li>
          <li className="sideBarListItem">
            <Bookmark className="sideBarIcon" />
            <span className="sideBarListItemText">Bookmark</span>
          </li>
          <li className="sideBarListItem">
            <Link
              to="/profile/kei"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Person className="sideBarIcon" />
              <span className="sideBarListItemText">Profile</span>
            </Link>
          </li>
          <li className="sideBarListItem">
            <Settings className="sideBarIcon" />
            <span className="sideBarListItemText">Settings</span>
          </li>
        </ul>
        <hr className="sideBarHr" />
        <ul className="sideBarFriendList">
          {Users.map((user) => (
            <FollowRecommendations user={user} key={user.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
