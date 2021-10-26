import mongodb, {Collection, Db, MongoClient } from 'mongodb';
import DataProvider from '../../../services/interfaces/dataProvider';

export default class MongoDB implements DataProvider{
    
    public client: MongoClient;
    public db: Db;
    constructor(url : string, options : mongodb.MongoClientOptions){
        this.client  = new MongoClient(url, {...options, loggerLevel: 'error'});
        this.db = {} as Db;
    }
    
    async connection(name:string): Promise<void> {
        let tries = 3
        while(tries>0){
            try {
                this.client = await this.client.connect();
                this.db = await this.client.db(name);
                break;
            } catch (e) {
                tries = tries - 1;
                if(tries === 0) throw e;
            }
        }
    }
    collection<T>(name: string): Collection<T> {
        return this.db.collection(name);
    }
    
}