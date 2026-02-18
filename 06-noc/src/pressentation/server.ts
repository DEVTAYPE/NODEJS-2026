import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class ServerApp {
  public static start() {
    const URL = "http://localhost:3000/posts";

    const checkService = new CheckService(
      () => console.log("URL is reachable:", URL),
      (error) => console.error("Check failed:", error.message),
    );

    CronService.createCron("*/5 * * * * *", () => {
      const url = URL;
      checkService.execute(url);
    });
  }
}
