import soundOnImg from "../assets/sound_on_icon.svg";
import soundOffImg from "../assets/sound_off_icon.svg";
import crossImg from "../assets/cross_icon.svg";

class ImageContent {
  getCrossIcon() {
    return crossImg;
  }
  getSoundOnIcon() {
    return soundOnImg;
  }
  getSoundOffIcon() {
    return soundOffImg;
  }
}

export default ImageContent;
