import { yargSyncPlugin } from "./config/plugins/args.plugin.js";
import { ServerApp } from "./pressentation/server-app.js";

(() => {
  main();
})();

async function main() {
  const { b: base, l: limit, s: show, n: name, d: directory } = yargSyncPlugin;

  ServerApp.run({ base, limit, show, name, directory });
}
