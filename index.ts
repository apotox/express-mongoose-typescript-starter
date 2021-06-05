require('dotenv').config()
import app from "./api/server";
import connectDB from "./api/helpers/database";
import { Server } from "http";




const port = process.env.PORT || 3000;

let server: Server | null = null;

const startServer = () => {
  try {
    server = app.listen(port, (): void => {
      console.log(`🚀 server start listening on ${port}`);
    });
  } catch (error) {
    console.error(`Error occured: ${error.message}`);
  }
};

connectDB((err) => {
  if (err) {
    console.error(err.message);
  } else {
    server?.close();
    startServer();
  }
});
