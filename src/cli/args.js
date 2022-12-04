import { argv } from "node:process";

const parseArgs = () => {
  const args = argv.reduce(
    (acc, arg, index) =>
      /^--/.test(arg)
        ? [...acc, `${arg.substring(2)} is ${argv[index + 1]}`]
        : acc,
    []
  );

  console.log(args.join(", "));
};

parseArgs();
