import React from "react";
import "./RightBar.css";
import { Users } from "../../dummyData";
import Online from "../Online/Online";
const RightBar = ({ user }) => {
  const HomeRightBar = () => {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
      <div className="RightBar">
        <div className="eventContainer">
          <img src="assets/star.png" alt="" className="starImg" />
          <span className="eventText">
            <b>Only followers event</b>
          </span>
        </div>
        <img src="assets/ad.jpeg" alt="" className="eventImg" />
        <h4 className="rightBarTitle">Active friends</h4>
        <ul className="rightBarFriendList">
          {Users.map((user) => (
            <Online user={user} key={user.id} />
          ))}
        </ul>
        <p className="promotionTitle">Promotion Ads</p>
        <img
          src={PUBLIC_FOLDER + "/promotion/promotion1.jpeg "}
          alt=""
          className="rightBarPromotionImg"
        />
        <p className="promotionName">Shopping</p>
        <img
          src={PUBLIC_FOLDER + "/promotion/promotion2.jpeg "}
          alt=""
          className="rightBarPromotionImg"
        />
        <p className="promotionName">Car Shop</p>
        <img
          src={PUBLIC_FOLDER + "/promotion/promotion3.jpeg "}
          alt=""
          className="rightBarPromotionImg"
        />
        <p className="promotionName">Kei.corp.inc</p>
      </div>
    );
  };

  const ProfileRightBar = () => {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
      <div className="RightBar">
        <h4 className="rightBarTitle">User Info</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>

            <span className="rightBarInfoKey">Tokyo, Japan</span>
          </div>
          <h4 className="rightBarTitle">Your Friends</h4>
          <div className="rightBarFollowings">
            <div className="rightBarFollowing">
              <img
                src={PUBLIC_FOLDER + "/person/1.jpg"}
                alt=""
                className="rightBarFollowingImg"
              />
              <span className="rightBarFollowingName">Kei</span>
            </div>
            <div className="rightBarFollowing">
              <img
                src={PUBLIC_FOLDER + "/person/2.jpeg"}
                alt=""
                className="rightBarFollowingImg"
              />
              <span className="rightBarFollowingName">Yu</span>
            </div>
            <div className="rightBarFollowing">
              <img
                src={PUBLIC_FOLDER + "/person/3.jpeg"}
                alt=""
                className="rightBarFollowingImg"
              />
              <span className="rightBarFollowingName">Kei</span>
            </div>
            <div className="rightBarFollowing">
              <img
                src={PUBLIC_FOLDER + "/person/4.jpeg"}
                alt=""
                className="rightBarFollowingImg"
              />
              <span className="rightBarFollowingName">Kei</span>
            </div>
            <div className="rightBarFollowing">
              <img
                src={PUBLIC_FOLDER + "/person/5.jpeg"}
                alt=""
                className="rightBarFollowingImg"
              />
              <span className="rightBarFollowingName">Kei</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default RightBar;
