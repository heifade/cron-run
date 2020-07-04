import { parse, version } from "commander";
import { version as v } from "../package.json";
import { resolve } from "path";
import { run } from "./run";

const comm = version(v)
  .description("新建项目")
  .option("-c --config <n>", "配置文件", resolve(__dirname, "./config.json"))
  .action((pars) => {
    if (!pars.name) {
      comm.help();
      return;
    }

    run(pars.config);
  });

parse(process.argv);
