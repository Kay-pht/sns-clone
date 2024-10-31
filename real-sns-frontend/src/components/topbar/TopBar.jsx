import React from "react";

const TopBar = () => {
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <span className="logo">Real SNS</span>
      </div>
      <div className="topBarCenter">
        <div className="searchBar">
          <input type="text" placeholder="Search" className="searchInput" />
        </div>
      </div>
      <div className="topBarRight">
        <div className="topBarIconItem">1</div>
        <div className="topBarIconItem">2</div>
      </div>
      <img src="/assets/..." alt="" className="topBarIms" />
    </div>
  );
};

export default TopBar;
