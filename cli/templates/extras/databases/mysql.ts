import mysql from "mysql";
import "dotenv/config";

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT as unknown as number,
  password: process.env.MYSQL_PASSWORD,
});

const connectDB = async () => {
  try {
    connection.connect((error: Error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Connected to MySQL");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
