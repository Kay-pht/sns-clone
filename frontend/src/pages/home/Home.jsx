import React from "react";
import TopBar from "../../components/topBar/TopBar";
import SideBar from "../../components/sideBar/SideBar";
import RightBar from "../../components/rightBar/RightBar";
import Timeline from "../../components/timeline/Timeline";
import "./Home.css";

export default function Home() {
  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <SideBar />
        <Timeline />
        <RightBar />
      </div>
    </>
  );
}
