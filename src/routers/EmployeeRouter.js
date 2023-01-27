import express from 'express';
import { fetchAll, fetchById, fetchHigestPaid, save } from "../controllers/EmployeeController.js";
import { Router } from 'express';
const employeeRouter=express.Router();
employeeRouter.post('/employees',save)
employeeRouter.get('/employees',fetchAll)
employeeRouter.get('/employees',fetchById)
employeeRouter.get('/employees',fetchHigestPaid)

export default employeeRouter;