import express,{Application, Request, Response} from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { log } from 'console';
dotenv.config({path: "./.env"});

const app:Application = express();

const port: string | number | undefined = process.env.PORT || 9900;
const hostName:string = "127.0.0.1";
const dbUrl: any = process.env.MONGO_DB_CLOUD_URL;
const dbName: string | undefined = process.env.MONGO_DB_DATABASE;


// app.get("/",(request:Request , response:Response) => {
//     response.json(200);
//     response.json({
//         msg: "Welcome to express server"
//     })
// })

// mongoose.connect(dbUrl, {dbName:dbName})
// .then(()=>{console.log("Database Connection is ready....")})
// .catch((err)=>{console.log(err)})

import groupRouter from "./routes/groupRouter"
app.use("/groups", groupRouter);

// const connectDB = async () => {
//     try {
//       await mongoose.connect(dbUrl, {
//       } as mongoose.ConnectOptions);
  
//       console.log("MongoDB connected successfully");
//     } catch (error) {
//       console.error("MongoDB connection error:", error);
//       process.exit(1); // Exit process with failure
//     }
//   };

//   connectDB();

if(port)
{
    app.listen(Number(port), () => {
        if(dbUrl && dbName) {
            mongoose.connect(dbUrl, {dbName:dbName})
            .then((dbResponse) => {
                console.log();
            })
            .catch((error) => {
                console.error(error);
                process.exit(0);
        });
    }
        console.log(`Express server is started at http://${hostName}:${port}`)
    });
}

