import React from "react";
import "./RightBar.css";
import { Users } from "../../dummyData";
import Online from "../Online/Online";
const RightBar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <>
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
          src="assets/promotion/promotion1.jpeg "
          alt=""
          className="rightBarPromotionImg"
        />
        <p className="promotionName">Shopping</p>
        <img
          src="assets/promotion/promotion2.jpeg "
          alt=""
          className="rightBarPromotionImg"
        />
        <p className="promotionName">Car Shop</p>
        <img
          src="assets/promotion/promotion3.jpeg "
          alt=""
          className="rightBarPromotionImg"
        />
        <p className="promotionName">Kei.corp.inc</p>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
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
                src="assets/person/1.jpg"
                alt=""
                className="rightBarFollowingImg"
              />
              <span className="rightBarFollowingName">Kei</span>
            </div>
            <div className="rightBarFollowing">
              <img
                src="assets/person/2.jpeg"
                alt=""
                className="rightBarFollowingImg"
              />
              <span className="rightBarFollowingName">Yu</span>
            </div>
            <div className="rightBarFollowing">
              <img
                src="assets/person/3.jpeg"
                alt=""
                className="rightBarFollowingImg"
              />
              <span className="rightBarFollowingName">Kei</span>
            </div>
            <div className="rightBarFollowing">
              <img
                src="assets/person/4.jpeg"
                alt=""
                className="rightBarFollowingImg"
              />
              <span className="rightBarFollowingName">Kei</span>
            </div>
            <div className="rightBarFollowing">
              <img
                src="assets/person/5.jpeg"
                alt=""
                className="rightBarFollowingImg"
              />
              <span className="rightBarFollowingName">Kei</span>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default RightBar;
