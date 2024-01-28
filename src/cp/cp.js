import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
  const cp = spawn("node", ["src/cp/files/script.js", ...args]);

  process.stdin.pipe(cp.stdin);
  cp.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["test1", "test2", "test3"]);
