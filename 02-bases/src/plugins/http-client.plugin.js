const axios = require("axios");

const httpClientPlugin = {
  get: async (url) => {
    try {
      // const response = await fetch(url);
      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }
      // return await response.json();

      const res = await axios.get(url);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return new Error(`Failed to fetch data from ${url}: ${error.message}`);
    }
  },
};

module.exports = { httpClientPlugin };
