import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  result:any;
  constructor(private http:HttpClient) {} 
getJobs(){
 return this.http.get('https://api.github.com/users/seeschweiler');
}
}
