import { envs } from "./config/plugin/envs.plugin";
import { LogModel, MongoDatabase } from "./data/mongo";
import { ServerApp } from "./pressentation/server";

(() => {
  main();
})();

async function main() {
  await MongoDatabase.connect({
    mongoUri: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });

  ServerApp.start();
}
