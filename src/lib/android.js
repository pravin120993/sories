import { isAndroid } from "react-device-detect";

export const openLink = (value) => {
  try {
    if (isAndroid) {
      window.Android.openLink(value);
    }
  } catch (err) {
    console.log(err);
  }
};

export const controlSound = (value) => {
  try {
    if (isAndroid) {
      window.Android.controlSound(value);
    }
  } catch (err) {
    console.log(err);
  }
};
