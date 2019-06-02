import Sequalize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

class Connection {
  constructor() {
    this.db = new Sequalize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
      host: process.env.DB_HOST,
      dialect: 'postgres',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    });
  }
}
export default Connection;