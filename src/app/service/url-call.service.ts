import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UrlCallService {

  apiUrl: string = 'https://dummyjson.com/users';
  dialogData: any;

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  
  edittUsers(id) {
    return this.http.get('https://dummyjson.com/users/'+id);
  }
  
  getDialogData() {
    return this.dialogData;
  }

  updateCurrentData(id :number, data:any){
    return this.http.put(`${this.apiUrl}/${id}`,data);

  }

  adduser(data:any){
    return this.http.post('https://dummyjson.com/users/add',data);

  }

  deleteRequest(id: any){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

 }
