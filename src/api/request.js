import axios from "axios";

const instance = axios.create({
  baseURL: `https://api.sitemap-generator.ru/test-api/`,
});

class Request {
  constructor(url) {
    this.request = instance;
    this.url = url;
  }

  read = () => {
    const headers = { Authorization: this.token };

    return this.request.get(this.url, { headers });
  };

  create = (data) => {
    const headers = {
      "X-Application-Token": "wefiEFv_dwDEvf-12Veda_feadvkJbBgh831",
    };

    return this.request.post(this.url, data, { headers });
  };

  update = (data) => {
    const headers = {
      Authorization: this.token,
    };

    return this.request.patch(this.url, data, { headers });
  };

  get token() {
    return "Bearer " + localStorage.token;
  }
}

export const request = new Request("user");
