import React, { useState } from "react";
import Stories from "react-insta-stories";
import "./App.css";

const stories = [
  {
    url: "https://impact-feed-revamp.s3.ap-south-1.amazonaws.com/Two-Takeaway-Habits-from-Successful--Leaders%21/feed_title/1648544606196pexels-gerd-altmann-21696.jpg",
    duration: 5000,
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 30m ago",
      profileImage: "https://picsum.photos/100/100",
    },
  },
  {
    url: "https://impact-feed-revamp.s3.ap-south-1.amazonaws.com/Turmeric%2C-The-Solution-To-All-Your-Problems-/feed_title/1648041063130pexels-tamanna-rumee-7988009.jpg",
    duration: 5000,
    seeMore: ({ close }) => {
      return (
        <div
          onClick={close}
          style={{ width: "100%", height: "100%", background: "white" }}
        >
          Hello, click to close this.
        </div>
      );
    },
  },
  {
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    type: "video",
  },
  {
    url: "https://impact-feed-revamp.s3.ap-south-1.amazonaws.com/Weight-Training-Vs-Cardio-/feed_title/1647436156786Untitled-1.jpg",
  },
];

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
        <div>
          <span onClick={onHide}>x</span>
          <Stories
            stories={stories2}
            defaultInterval={4000}
            width="100vw"
            height="100vh"
            onStoryEnd={(s, st) => {
              console.log("story ended", s, st);
            }}
            onAllStoriesEnd={(s, st) => {
              setShow(false);
              console.log("all stories ended", s, st);
            }}
            onStoryStart={(s, st) => {
              console.log("story started", s, st);
            }}
            currentIndex={2}
          />
        </div>
      ) : (
        <span onClick={onShow}>Show</span>
      )}
    </React.Fragment>
  );
}

export default App;
