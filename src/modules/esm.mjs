import path from "node:path";
import { fileURLToPath } from "node:url";
import { release, version } from "node:os";
import { createServer as createServerHttp } from "node:http";

await import("./files/c.js");

const random = Math.random();

const __filename = fileURLToPath(import.meta.url);
const __dirname = fileURLToPath(new URL(".", import.meta.url));

const pathToJSON = random > 0.5 ? "./files/a.json" : "./files/b.json";

const { default: unknownObject } = await import(pathToJSON, {
  assert: { type: "json" },
});

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export default {
  unknownObject,
  myServer,
};