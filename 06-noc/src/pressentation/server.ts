import { CheckService } from "../domain/use-cases/checks/check-service";
import { MongoDataSource } from "../infrastructure/datasources/mongo.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";

const logRepository = new LogRepositoryImpl(new MongoDataSource());

export class ServerApp {
  public static start() {
    console.log("Server is starting...");
    // const emailService = new NodeMailerService();
    // emailService.sendEmailWithFileSystemLogs("jetaypedev@outlook.com");
    // emailService.sendEmail({
    //   to: "jetaypedev@outlook.com",
    //   subject: "Test Email from Node.js App",
    //   htmlBody: "<h1>Hello from Node.js!</h1><p>This is a test email.</p>",
    // });
    const URL = "http://localhost:3000";
    const checkService = new CheckService(
      logRepository,
      () => console.log("URL is reachable:", URL),
      (error) => console.error("Check failed:", error.message),
    );
    CronService.createCron("*/5 * * * * *", () => {
      const url = URL;
      checkService.execute(url);
    });
  }
}
