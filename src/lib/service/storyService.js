import HttpService from "../httpService";

class StoryService extends HttpService {
  getStories() {
    return this.getQuery("");
  }
}

export default StoryService;
