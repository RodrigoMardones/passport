export interface UseCase<T, K = unknown> {
    execute(data?:K): T;
  }

export interface PromiseUseCase<T, K = unknown> {
  execute(data?:K): Promise<T>;
}
