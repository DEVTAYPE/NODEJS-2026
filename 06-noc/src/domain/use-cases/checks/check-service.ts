export interface ICheckServiceUseCase {
  execute(url: string): Promise<boolean>;
}

type TSuccessCallback = () => void;
type TFailureCallback = (error: Error) => void;

export class CheckService implements ICheckServiceUseCase {
  constructor(
    private readonly onSuccess: TSuccessCallback,
    private readonly onFailure: TFailureCallback,
  ) {}

  async execute(url: string): Promise<boolean> {
    try {
      const req = await fetch(url);

      if (!req.ok) {
        throw new Error(`Failed to fetch ${url}`);
      }

      this.onSuccess();

      return true;
    } catch (error) {
      this.onFailure(error instanceof Error ? error : new Error(String(error)));
      return false;
    }
  }
}
