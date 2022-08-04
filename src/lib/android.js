import { isAndroid } from "react-device-detect";

export const openLink = (value) => {
  console.log(value);
  try {
    if (isAndroid) {
      window.Android.openLink(value);
    }
  } catch (err) {
    console.log(err);
  }
};
