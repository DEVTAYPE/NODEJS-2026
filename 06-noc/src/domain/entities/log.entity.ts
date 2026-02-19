export enum ELogSeverityLevel {
  low = "low",
  medium = "medium",
  high = "high",
}

export interface ILogEntityOptions {
  level: ELogSeverityLevel;
  message: string;
  createdAt?: Date;
  origin: string;
}

export class LogEntity {
  public level: ELogSeverityLevel;
  public message: string;
  public createdAt: Date;
  public origin: string;

  constructor(options: ILogEntityOptions) {
    const { level, message, createdAt = new Date(), origin } = options;

    this.level = level;
    this.message = message;
    this.createdAt = createdAt;
    this.origin = origin;
  }

  static fromJSON(json: string): LogEntity {
    const { message, level, createdAt, origin } = JSON.parse(json);

    const log = new LogEntity({
      level,
      message,
      origin,
      createdAt: new Date(createdAt),
    });

    return log;
  }
}
