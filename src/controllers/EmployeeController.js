import { StatusCodes } from "http-status-codes";
import {getEmployees, insertEmployees,getEmployeesByHighestPaidEmployee,getEmployeesById,getEmployeesByName } from "../services/EmployeeService.js";

export function save (request,response){
    try {
    
        insertEmployees(request.body);
        response.status(StatusCodes.CREATED).json({message:'employee created successfully'})

    } catch (error) {
     response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Error saving employee'})
    }
}

export function fetchAll(request,response){
    try {
        const employees = getEmployees()
        if (employees.length>0){
            response.status(StatusCodes.OK).json(employees);


        }else{
            response.status(StatusCodes.NOT_FOUND).json({message:'no employees found'});

        }
        
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Error fetching employees'})
    }
}


export function fetchById(request,response){
    
    try {
             const employee=  getEmployeesById(request.params.id)    
                    if(employee) {
                          response.status(StatusCodes.OK).json(employee);
                    } else{
                                response.status(StatusCodes.NOT_FOUND).json({message:'no employees found'}); 
                          }   
    } catch (error)
             { response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Error fetching employees'})
         }
}    



           export function fetchHigestPaid(request,response) {
              try {
                   const employee= getHighestsalaryEmployeePaid(request.params.salary );
                     if(employee){
                    response.status(StatusCodes.OK).json(employee);
                        }   
                     else{ response.status(StatusCodes.NOT_FOUND).json({message:'no employees found employee'}); 
                          }  
                     } catch (error){
                             response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'error in fetching employee'})
                                }    
}  
