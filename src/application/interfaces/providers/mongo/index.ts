import Mongo from "./mongoDB";

const dataBase = new Mongo(process.env.DATABASE_URI, {});

if (!Object.keys(dataBase.db).length) {
    dataBase.connection(process.env.DATABASE_NAME);
  }

export default dataBase;
