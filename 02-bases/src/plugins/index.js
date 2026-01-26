// Archivo de barril

const { getAge } = require("./get-age.plugin");
const { getUUID } = require("./get-uuid.plugin");
const { httpClientPlugin } = require("./http-client.plugin");

module.exports = {
  getUUID,
  getAge,
  httpClientPlugin,
};
