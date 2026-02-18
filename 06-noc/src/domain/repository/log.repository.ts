import type { ELogSeverityLevel, LogEntity } from "../entities/log.entity";

export abstract class LogRepository {
  abstract saveLog(log: LogEntity): Promise<void>;
  abstract getLogs(severityLevel?: ELogSeverityLevel): Promise<LogEntity[]>;
}
