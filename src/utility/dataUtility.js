import React from "react";
import { openLink } from "../lib/android";
class DataUtility {
  static parseStoryData(data) {
    data.forEach((item) => {
      if (item.isSeeMore) {
        item["seeMoreCollapsed"] = ({ toggleMore, action }) => (
          <div
            className="customSeeMore box"
            onClick={() => {
              toggleMore(true);
              openLink(item.seeMoreUrl);
            }}
          >
            <p className="mx-0 arrow1">^</p>
            <p className="mx-0 arrow2">^</p>
            <p className="mx-0 arrow2">Swipe up</p>
          </div>
        );
        item["seeMore"] = ({ close }) => {
          return (
            <div
              onClick={close}
              style={{ width: "100%", height: "100%", background: "white" }}
            >
              Hello, click to close this.
            </div>
          );
        };
      }
    });
    return data;
  }
}

export default DataUtility;
