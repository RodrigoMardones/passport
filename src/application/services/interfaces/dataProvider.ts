import { Collection } from "mongodb";

export default interface DataProvider {
    collection<T>(name: string): Collection<T> ;
}