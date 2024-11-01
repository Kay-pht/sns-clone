import React from "react";
import TopBar from "../../components/topBar/TopBar";
import SideBar from "../../components/sideBar/SideBar";
import RightBar from "../../components/rightBar/RightBar";
import Timeline from "../../components/timeline/Timeline";
import "./Profile.css";
const Profile = () => {
  return (
    <>
      <TopBar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="assets/post/3.jpeg"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="assets/person/1.jpg"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Kei</h4>
              <span className="profileInfoDesc">Learning Programming</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Timeline />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
