import { schedule } from "node-cron";
import { readFileSync } from "fs";
import { execSync } from "child_process";

interface IItem {
  time: string;
  sh: string;
}

export function run(configFile: string) {
  const configContent = readFileSync(configFile, { encoding: "utf8" });
  const config: IItem[] = JSON.parse(configContent);

  config.map((item) => {
    schedule(item.time, () => {
      execSync(item.sh, { cwd: __dirname, stdio: "inherit" });
    });
  });
}
