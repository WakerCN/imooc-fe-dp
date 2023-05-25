import { createReadStream } from "fs";
import { resolve } from "path";

const readStream = createReadStream(resolve(__dirname, "package-lock.json"));

let length = 0;

readStream.on("data", function (chunk) {
  length += chunk.toString().length;
  console.log(chunk.toString());
});

readStream.on("end", function () {
  console.log(length);
});
