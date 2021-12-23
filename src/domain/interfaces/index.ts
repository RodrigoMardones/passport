
export interface PairResponse {
    code : number;
    message: string;
}



export interface UseCase<T, K = unknown> {
    execute(data?:K): T | Promise<K>;
}
