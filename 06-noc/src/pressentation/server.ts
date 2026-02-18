import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDataSource(),
);

export class ServerApp {
  public static start() {
    const URL = "http://localhost:3000";

    const checkService = new CheckService(
      fileSystemLogRepository,
      () => console.log("URL is reachable:", URL),
      (error) => console.error("Check failed:", error.message),
    );

    CronService.createCron("*/5 * * * * *", () => {
      const url = URL;
      checkService.execute(url);
    });
  }
}
