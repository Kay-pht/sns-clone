import React, { useContext, useRef, useState } from "react";
import "./Share.css";
import { Analytics, Face, Gif, Image } from "@mui/icons-material";
import { AuthContext } from "../../state/AuthContext";
import axios from "axios";

export const Share = () => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const desc = useRef();

  const [file, setFile] = useState(null);
  console.log("File: ", file);

  const descHandler = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    try {
      await axios.post("/posts", newPost);
      window.location.reload(); // Reload the page to display the new post
    } catch (error) {
      console.log("Failed to create a new post: ", error);
    }

    desc.current.value = "";
  };

  return (
    <div className="share">
      <form className="shareWrapper" onSubmit={(e) => descHandler(e)}>
        <div className="shareTop">
          <img
            src={
              user.profilePicture
                ? PUBLIC_FOLDER + user.profilePicture
                : PUBLIC_FOLDER + "/person/noAvatar.png"
            }
            alt=""
            className="shareProfileImg"
          />
          <input
            type="text"
            className="shareInput"
            placeholder="What are you doing?"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />

        <div className="shareButtons">
          <div className="shareOptions">
            <label className="shareOption" htmlFor="file">
              <Image className="shareIcon" htmlColor="blue" />
              <span className="shareOptionText">Photo</span>
              <input
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                style={{ display: "none" }}
                onAbort={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <Gif className="shareIcon" htmlColor="hotpink" />
              <span className="shareOptionText">Gif</span>
            </div>
            <div className="shareOption">
              <Face className="shareIcon" htmlColor="green" />
              <span className="shareOptionText">Feeling</span>
            </div>
            <div className="shareOption">
              <Analytics className="shareIcon" htmlColor="red" />
              <span className="shareOptionText">Vote</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};
