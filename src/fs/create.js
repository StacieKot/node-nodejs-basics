import { writeFile, access } from "node:fs/promises";
import { Buffer } from "node:buffer";

const create = async () => {
  const filePath = new URL("./files/fresh.txt", import.meta.url);

  const createFile = async () => {
    const data = new Uint8Array(Buffer.from("I am fresh and young"));
    await writeFile(filePath, data);
  };

  try {
    await access(filePath);
  } catch {
    return await createFile();
  }

  throw new Error("FS operation failed");
};

await create();
