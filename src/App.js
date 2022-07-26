import React, { useEffect, useState } from "react";
import "./App.css";
import CStories from "./component/CStories/CStories";
import { stories } from "./content/storiesContent";
import StoryService from "./lib/service/storyService";

function App() {
  const [show, setShow] = useState(false);
  const [stories2, setStories2] = useState(stories);
  const storyService = new StoryService();
  const onShow = () => {
    setShow(true);
  };
  const onHide = () => {
    setShow(false);
  };
  // useEffect(() => {
  //   storyService.getStories().then((res) => {
  //     console.log(res);
  //     if (res.status === 200) {
  //       setStories2(res.data.story);
  //     }
  //   });
  // }, []);
  return (
    <React.Fragment>
      {show ? (
        <CStories stories={stories2} currentIndex={0} setShow={setShow} />
      ) : (
        <span onClick={onShow}>Show</span>
      )}
    </React.Fragment>
  );
}

export default App;
