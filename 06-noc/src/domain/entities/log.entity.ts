export enum ELogSeverityLevel {
  low = "low",
  medium = "medium",
  high = "high",
}

export class LogEntity {
  public level: ELogSeverityLevel;
  public message: string;
  public createdAt: Date;

  constructor(level: ELogSeverityLevel, message: string) {
    this.level = level;
    this.message = message;
    this.createdAt = new Date();
  }

  static fromJSON(json: string): LogEntity {
    const { message, level, createdAt } = JSON.parse(json);

    const log = new LogEntity(level, message);
    log.createdAt = new Date(createdAt);

    return log;
  }
}
