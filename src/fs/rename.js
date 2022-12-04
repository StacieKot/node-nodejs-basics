import { access, rename as renameFile } from "node:fs/promises";

const rename = async () => {
  let oldPathExists = false;

  const oldPath = new URL("./files/wrongFilename.txt", import.meta.url);
  const newPath = new URL("./files/properFilename.md", import.meta.url);

  try {
    await access(oldPath);
    oldPathExists = true;
    await access(newPath);
  } catch {
    if (oldPathExists) {
      return await renameFile(oldPath, newPath);
    }
  }

  throw new Error("FS operation failed");
};

await rename();
