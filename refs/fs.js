const fs = require("fs/promises");
const fsSync = require("fs");
const path = require("path");

const base = path.join(__dirname, "temp");

// fs.mkdir(base)
//   .then(() => {
//     console.log("Folder created");
//   })
//   .catch((err) => {
//     console.log("err: ", err);
//   });

const getContent = () => `\n\r${process.argv[2] ?? ""}`;

async function start() {
  try {
    if (fsSync.existsSync(base)) {
        await fs.appendFile(path.join(base, "logs.txt"), getContent());
        const data = await fs.readFile(path.join(base, "logs.txt"), { encoding: "utf-8" });
        console.log(data);
    } else {
      await fs.mkdir(base);
      console.log("Folder created");
      await fs.writeFile(path.join(base, "logs.txt"), getContent());
    }
  } catch (error) {
    console.log("error: ", error);
  }
}
start();
