import { Chat, Notifications, Search } from "@mui/icons-material";
import React, { useContext } from "react";
import "./TopBar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../state/AuthContext";

const TopBar = () => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span className="logo">Real SNS</span>
        </Link>
      </div>
      <div className="topBarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input type="text" placeholder="Search" className="searchInput" />
        </div>
      </div>
      <div className="topBarRight">
        <div className="topBarItemIcons">
          <div className="topBarIconItem">
            <Chat />
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <Notifications />
            <span className="topBarIconBadge">2</span>
          </div>
          <Link to={`/profile/${user.username}`}>
            <img
              src={
                user.profilePicture
                  ? PUBLIC_FOLDER + user.profilePicture
                  : PUBLIC_FOLDER + `/person/noAvatar.png`
              }
              alt=""
              className="topBarImg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
