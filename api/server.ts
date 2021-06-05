import express, { Application, Request, Response } from "express";
import api from './routes/index'
import morgan from 'morgan'
import cors from 'cors'
import helmet from "helmet";
const app: Application = express();

app.use(morgan('dev'));
app.use(cors());
app.use(helmet())

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',api)



export default app