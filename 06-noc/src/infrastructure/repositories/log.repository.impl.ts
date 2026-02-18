import type { LogDataSource } from "../../domain/datasources/log.datasource";
import type {
  ELogSeverityLevel,
  LogEntity,
} from "../../domain/entities/log.entity";
import type { LogRepository } from "../../domain/repository/log.repository";

export class LogRepositoryImpl implements LogRepository {
  constructor(private readonly logDataSource: LogDataSource) {}

  async saveLog(log: LogEntity): Promise<void> {
    await this.logDataSource.saveLog(log);
  }

  async getLogs(severityLevel: ELogSeverityLevel): Promise<LogEntity[]> {
    return this.logDataSource.getLogs(severityLevel);
  }
}
