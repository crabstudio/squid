import { Client } from "pg";
import "dotenv/config";

const connectDB = async () => {
  try {
    const client = new Client({
      user: process.env.PGUSER,
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      password: process.env.PGPASSWORD,
      port: process.env.PGPORT as unknown as number,
    });

    await client.connect();
    const res = await client.query("SELECT * FROM some_table");
    console.log(res);
    await client.end();
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
