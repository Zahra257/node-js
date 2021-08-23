const fs = require("fs");
const path = require("path");

const mymodule = (dir, ext, callback) => {
  fs.readdir(dir, (err, data) => {
    if (err) return callback(err);
    const list = data.filter(e => {
      return path.extname(e) === "." + ext;
    });
    callback(null, list);
  });
};

module.exports = mymodule;