import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDataSource(),
);

export class ServerApp {
  public static start() {
    // const emailService = new NodeMailerService();
    // emailService.sendEmailWithFileSystemLogs("jetaypedev@outlook.com");
    // emailService.sendEmail({
    //   to: "jetaypedev@outlook.com",
    //   subject: "Test Email from Node.js App",
    //   htmlBody: "<h1>Hello from Node.js!</h1><p>This is a test email.</p>",
    // });
    // const URL = "http://localhost:3000";
    // const checkService = new CheckService(
    //   fileSystemLogRepository,
    //   () => console.log("URL is reachable:", URL),
    //   (error) => console.error("Check failed:", error.message),
    // );
    // CronService.createCron("*/5 * * * * *", () => {
    //   const url = URL;
    //   checkService.execute(url);
    // });
  }
}
