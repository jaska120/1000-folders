const fs = require("fs");

let path = "./";

for (let index = 0; index < 1000; index++) {
  path = path + "/" + index;
  fs.mkdir(path, { recursive: true }, () => {});
}
