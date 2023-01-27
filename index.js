import 'dotenv/config';
import express from 'express';
import employeeRouter from './src/routers/EmployeeRouter.js';

const app = express();
app.use(express.json());
app.use(employeeRouter)
app.listen(process.env.SERVER_PORT ,() => {
    console.log(' SERVERlistening on port ' + process.env.SERVER_PORT)
});