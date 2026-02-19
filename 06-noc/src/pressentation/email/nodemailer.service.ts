import { createTransport } from "nodemailer";
import { envs } from "../../config/plugin/envs.plugin";
import type { LogRepository } from "../../domain/repository/log.repository";

export interface ISendEmailOptions {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachments?: IAttachment[];
}

interface IAttachment {
  filename: string;
  path: string;
}

export class NodeMailerService {
  private transporter = createTransport({
    service: envs.MAILER_SERVICE,
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAILER_SECRET_KEY,
    },
  });

  private constructor(private readonly logRepository: LogRepository) {}

  async sendEmail(options: ISendEmailOptions): Promise<boolean> {
    const { to, subject, htmlBody, attachments = [] } = options;

    try {
      const sendInformation = await this.transporter.sendMail({
        to,
        subject,
        html: htmlBody,
        attachments: attachments,
      });

      return true;
    } catch (error) {
      console.log("Error sending email:", error);
      return false;
    }
  }

  async sendEmailWithFileSystemLogs(to: string | string[]): Promise<boolean> {
    try {
      const subject = "Logs from File System";
      const htmlBody = "<h1>Here are the logs from the file system</h1>";

      const attachments: IAttachment[] = [
        {
          filename: "logs-all.log",
          path: "./logs/logs-all.log",
        },
        {
          filename: "logs-medium.log",
          path: "./logs/logs-medium.log",
        },
        {
          filename: "logs-high.log",
          path: "./logs/logs-high.log",
        },
      ];

      await this.sendEmail({ to, subject, htmlBody, attachments });
      return true;
    } catch (error) {
      console.log("Error sending email with file system logs:", error);

      return false;
    }
  }
}
