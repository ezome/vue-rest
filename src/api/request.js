import axios from "axios";

export class Request {
  constructor(url) {
    this.request = axios.create({
      baseURL: `https://api.sitemap-generator.ru/test-api/`,
    });
    this.url = url;
  }

  read = () => {
    return this.request.get(this.url, {
      headers: {
        Authorization: this.token,
      },
    });
  };
  create = (data) => {
    return this.request.post(this.url, data, {
      headers: {
        "X-Application-Token": "wefiEFv_dwDEvf-12Veda_feadvkJbBgh831",
      },
    });
  };
  update = (data) => {
    return this.request.patch(this.url, data, {
      headers: {
        Authorization: this.token,
      },
    });
  };

  get token() {
    return "Bearer " + localStorage.token;
  }
}
