import { LogModel } from "../../data/mongo";
import type { LogDataSource } from "../../domain/datasources/log.datasource";
import {
  LogEntity,
  type ELogSeverityLevel,
} from "../../domain/entities/log.entity";

export class MongoDataSource implements LogDataSource {
  async saveLog(log: LogEntity): Promise<void> {
    try {
      const newLog = await LogModel.create(log);
      await newLog.save();

      console.log("Log saved to MongoDB:", newLog);
    } catch (error) {
      console.error("Error saving log to MongoDB:", error);
      throw error;
    }
  }

  async getLogs(severityLevel: ELogSeverityLevel): Promise<LogEntity[]> {
    try {
      const logs = await LogModel.find({ level: severityLevel });

      console.log(
        `Logs retrieved from MongoDB with severity level ${severityLevel}:`,
        logs,
      );

      return logs.map((log) => LogEntity.fromObject(log));
    } catch (error) {
      console.error("Error retrieving logs from MongoDB:", error);
      throw error;
    }
  }
}
