import axios from "axios";

const instance = axios.create({
  baseURL: `https://api.sitemap-generator.ru/test-api/`,
});

export class Request {
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
    const headers = { Authorization: this.token };

    return this.request.patch(this.url, data, { headers });
  };

  get token() {
    return "Bearer " + localStorage.token;
  }
}

// localStorage.name = data.name;
//       localStorage.email = data.email;
//       localStorage.token = data["auth_key"];

// this.lastName = data.lastName;
//     this.firstName = data.firstName;
//     this.middleName = data.middleName;
