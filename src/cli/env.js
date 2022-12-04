import { env } from "node:process";

const parseEnv = () => {
  const variables = Object.entries(env)
    .filter(([key]) => key.includes("RSS_"))
    .map(([key, value]) => `${key}=${value}`);

  console.log(variables.join("; "));
};
parseEnv();
