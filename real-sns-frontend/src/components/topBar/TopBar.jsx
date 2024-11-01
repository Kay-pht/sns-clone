import { Chat, Notifications, Search } from "@mui/icons-material";
import React from "react";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <span className="logo">Real SNS</span>
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
          <img src="/assets/person/1.jpg" alt="" className="topBarImg" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
