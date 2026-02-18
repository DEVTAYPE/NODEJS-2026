import * as fs from "fs";

import type { LogDataSource } from "../../domain/datasources/log.datasource";
import { ELogSeverityLevel, LogEntity } from "../../domain/entities/log.entity";

export class FileSystemDataSource implements LogDataSource {
  private readonly filePath = "logs/";
  private readonly allLogsPath = `${this.filePath}/logs-all.log`;
  private readonly mediumLogsPath = `${this.filePath}/logs-medium.log`;
  private readonly highLogsPath = `${this.filePath}/logs-high.log`;

  constructor() {
    this.createLogsFiles();
  }

  private createLogsFiles = () => {
    if (!fs.existsSync(this.filePath)) {
      fs.mkdirSync(this.filePath);
    }

    [this.allLogsPath, this.mediumLogsPath, this.highLogsPath].forEach(
      (path) => {
        if (fs.existsSync(path)) return;

        fs.writeFileSync(path, "");
      },
    );
  };

  async saveLog(newLog: LogEntity): Promise<void> {
    const newLogAsJSON = JSON.stringify(newLog) + "\n";

    fs.appendFileSync(this.allLogsPath, newLogAsJSON);

    if (newLog.level === ELogSeverityLevel.medium) {
      fs.appendFileSync(this.mediumLogsPath, newLogAsJSON);
    } else if (newLog.level === ELogSeverityLevel.high) {
      fs.appendFileSync(this.highLogsPath, newLogAsJSON);
    }
  }

  async getLogs(severityLevel: ELogSeverityLevel): Promise<LogEntity[]> {
    switch (severityLevel) {
      case ELogSeverityLevel.low:
        return this.readLogsFromFile(this.allLogsPath);
      case ELogSeverityLevel.medium:
        return this.readLogsFromFile(this.mediumLogsPath);
      case ELogSeverityLevel.high:
        return this.readLogsFromFile(this.highLogsPath);
      default:
        throw new Error("Invalid severity level");
    }
  }

  private readLogsFromFile(filePath: string): LogEntity[] {
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const logLines = fileContent.trim().split("\n");
    const logs: LogEntity[] = logLines.map((line) => LogEntity.fromJSON(line));

    return logs;
  }
}
