import React, { useEffect, useState } from "react";
import "./App.css";
import CStories from "./component/CStories/CStories";
import StoryService from "./lib/service/storyService";
import DataUtility from "./utility/dataUtility";

function App() {
  const [show, setShow] = useState(true);
  const [stories2, setStories2] = useState([]);
  const storyService = new StoryService();
  useEffect(() => {
    storyService.getStories().then((res) => {
      setStories2(DataUtility.parseStoryData(res));
    });
  }, []);
  return (
    <React.Fragment>
      {show && stories2.length > 0 ? (
        <CStories stories={stories2} currentIndex={0} setShow={setShow} />
      ) : null}
    </React.Fragment>
  );
}

export default App;
