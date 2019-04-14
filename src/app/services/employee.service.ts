
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL="http://localhost:1212/spring-employee-mvc2/employee";
 
  constructor(private http:HttpClient) {
    console.log("EmployeeService created....");
   }

getAllEmployee():Observable<any>{
 return this.http.get(this.baseURL)
}

getEmployeeById(id:number):Observable<any>{
  return this.http.get(this.baseURL+"/"+id);
 }

 deleteEmployeeById(id:number):Observable<any>{
  return this.http.delete(this.baseURL+"/"+id);
 }
 updateEmployeeById(id:number,employee:any):Observable<any>{
  return this.http.put(this.baseURL+"/"+id,employee);
 }


 addEmployee(employee:any):Observable<any>{
  return this.http.post(this.baseURL,employee);
 }




}

