const options = require("../../server/options");

const toUri = (path, file) => {
  if (!file)
    return `http${!!options.secure ? "s" : ""}://${options.host}:${
      options.port
    }/image/:common/:default`;
  return `http${!!options.secure ? "s" : ""}://${options.host}:${
    options.port
  }/image/:${path}/:${file}`;
};

const stringToUri = (str) => {
  if (!str) return toUri(str)
  const [path, file] = str.split("/");
  return toUri(path, file);
};

module.exports = { toUri, stringToUri };
