import type { NodeMailerService } from "../../../pressentation/email/nodemailer.service";
import { ELogSeverityLevel, LogEntity } from "../../entities/log.entity";
import type { LogRepository } from "../../repository/log.repository";

interface ISendEmailLogsUseCase {
  execute(to: string | string[]): Promise<boolean>;
}

export class SendEmailLogs implements ISendEmailLogsUseCase {
  private constructor(
    private readonly emailService: NodeMailerService,
    private readonly logRepository: LogRepository,
  ) {}

  async execute(to: string | string[]): Promise<boolean> {
    try {
      const sent = await this.emailService.sendEmailWithFileSystemLogs(to);

      if (!sent) {
        throw new Error("Failed to send email with logs");
      }

      const log = new LogEntity({
        level: ELogSeverityLevel.low,
        message: `Email with logs sent to ${Array.isArray(to) ? to.join(", ") : to}`,
        origin: "SendEmailLogsUseCase",
      });
      await this.logRepository.saveLog(log);
      return true;
    } catch (error) {
      const log = new LogEntity({
        level: ELogSeverityLevel.high,
        message: `Failed to send email with logs to ${Array.isArray(to) ? to.join(", ") : to}. Error: ${JSON.stringify(error)}`,
        origin: "SendEmailLogsUseCase",
      });
      await this.logRepository.saveLog(log);

      return false;
    }
  }
}
