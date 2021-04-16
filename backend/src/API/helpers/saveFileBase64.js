module.exports = (path, file) => {
  require("fs").writeFile(path, file, "base64", (err) => {
    if (err) console.log(err);
  });
};
