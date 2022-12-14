import React from "react";
export const stories = [
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
    seeMoreCollapsed: ({ toggleMore, action }) => (
      <div className="customSeeMore box" onClick={() => toggleMore(true)}>
        <p className="mx-0 arrow1">^</p>
        <p className="mx-0 arrow2">^</p>
        <p className="mx-0 arrow2">Swipe up</p>
      </div>
    ),
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

const customSeeMore = {
  textAlign: "center",
  fontSize: 14,
  bottom: 20,
  position: "relative",
  color: "white",
};
