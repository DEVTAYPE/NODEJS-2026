import { ELogSeverityLevel, LogEntity } from "../../entities/log.entity";
import type { LogRepository } from "../../repository/log.repository";

export interface ICheckServiceUseCase {
  execute(url: string): Promise<boolean>;
}

type TSuccessCallback = () => void;
type TFailureCallback = (error: Error) => void;

export class CheckService implements ICheckServiceUseCase {
  constructor(
    private readonly logRepository: LogRepository,
    private readonly onSuccess: TSuccessCallback,
    private readonly onFailure: TFailureCallback,
  ) {}

  async execute(url: string): Promise<boolean> {
    try {
      const req = await fetch(url);

      if (!req.ok) {
        throw new Error(`Failed to fetch ${url}`);
      }

      const log = new LogEntity({
        level: ELogSeverityLevel.low,
        message: `Checked URL: ${url} - Status: ${req.status}`,
        origin: "CheckService",
      });

      this.onSuccess();
      this.logRepository.saveLog(log);

      return true;
    } catch (error) {
      const errMsg = error instanceof Error ? error.message : String(error);
      const log = new LogEntity({
        level: ELogSeverityLevel.high,
        message: `Error checking URL: ${url} - Error: ${errMsg}`,
        origin: "CheckService",
      });

      this.logRepository.saveLog(log);
      this.onFailure(error instanceof Error ? error : new Error(String(error)));
      return false;
    }
  }
}
