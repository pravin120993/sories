import React, { useState } from "react";
import "./App.css";
import CStories from "./component/CStories/CStories";
import { stories } from "./content/storiesContent";

function App() {
  const [show, setShow] = useState(false);
  const [stories2, setStories2] = useState(stories);
  const onShow = () => {
    setShow(true);
  };
  const onHide = () => {
    setShow(false);
  };
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
