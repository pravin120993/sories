import config from "../config/config.json";
export const HttpMethod = {
  Get: "GET",
  Post: "POST",
  Put: "PUT",
  Patch: "PATCH",
  Delete: "DELETE",
};

class HttpService {
  baseUrl = config.apiConfig.apiEndPoints;
  fetchAPI = (method, urlRoute, header, body) => {
    return new Promise((resolve, reject) => {
      let url = this.baseUrl + urlRoute;
      fetch(url, {
        method: method,
        headers: header === undefined ? config.apiConfig.headers : header,
        body: JSON.stringify(body),
        mode: "cors",
        cache: "no-cache",
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err))
        .finally();
    });
  };

  getQuery(url, header) {
    return this.fetchAPI(HttpMethod.Get, url, header, undefined);
  }
  postQuery(url, header, body) {
    return this.fetchAPI(HttpMethod.Post, url, header, body);
  }
  putQuery(url, header, body) {
    return this.fetchAPI(HttpMethod.Put, url, header, body);
  }
  patchQuery(url, header, body) {
    return this.fetchAPI(HttpMethod.Patch, url, header, body);
  }
  deleteQuery(url, header, body) {
    return this.fetchAPI(HttpMethod.Delete, url, header, body);
  }
}

export default HttpService;
