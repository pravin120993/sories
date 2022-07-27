import React, { useState } from "react";
import Stories from "react-insta-stories";
import config from "../../config/config.json";
import ImageContent from "../../content/imageContent";

const CStories = ({ stories, currentIndex, setShow }) => {
  const imageContent = new ImageContent();
  const [toggle, setToggle] = useState(true);
  return (
    <React.Fragment>
      <div className="storiesParentDiv">
        <span id="soundIconId" className="soundIconStyle">
          {toggle ? (
            <img
              src={imageContent.getSoundOnIcon()}
              onClick={() => {
                setToggle(false);
              }}
            />
          ) : (
            <img
              src={imageContent.getSoundOffIcon()}
              onClick={() => {
                setToggle(true);
              }}
            />
          )}
        </span>
        <span
          className="crossStyle"
          onClick={() => {
            setShow(false);
          }}
        >
          <img src={imageContent.getCrossIcon()} />
        </span>
        <Stories
          stories={stories}
          defaultInterval={config.storiesConfig.defaultInterval}
          height={config.storiesConfig.height}
          width={config.storiesConfig.width}
          currentIndex={currentIndex}
          onStoryEnd={(s, st) => {
            console.log("story ended", s, st);
          }}
          onAllStoriesEnd={(s, st) => {
            setShow(false);
            console.log("all stories ended", s, st);
          }}
          onStoryStart={(s, st) => {
            if (st?.type) {
              if (st.type === "video") {
                let ele = document.getElementById("soundIconId");
                ele.style.display = "block";
              }
            } else {
              let ele = document.getElementById("soundIconId");
              ele.style.display = "none";
            }
            console.log("story started", s, st);
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default CStories;
