import dotenvSafe from "dotenv-safe";
import path from "path";

const cwd = process.cwd();
const root = path.join.bind(cwd);

dotenvSafe.config({
  path: root(".env"),
  sample: root(".env.example"),
});

export const config = {
  PORT: process.env.PORT || 4000,
  MONGO_URI: process.env.MONGO_URI || "mongodb://127.0.0.1:27017",
};
