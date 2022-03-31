import React from "react";
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
    url: "https://impact-feed-revamp.s3.ap-south-1.amazonaws.com//feed_title/1647853158573Untitled-1.jpg",
  },
  {
    url: "https://impact-feed-revamp.s3.ap-south-1.amazonaws.com/Weight-Training-Vs-Cardio-/feed_title/1647436156786Untitled-1.jpg",
  },
];

function App() {
  return (
    <Stories
      stories={stories}
      defaultInterval={4000}
      width="100vw"
      height="100vh"
    />
  );
}

export default App;
