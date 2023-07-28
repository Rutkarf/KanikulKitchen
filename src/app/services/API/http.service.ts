import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }


getData(table: any, id:any=null): Observable<any>
{ 
  if(id==null){
return this.http.get('http://localhost/caniculeKitchen/src/app/services/API/'+table+'.php?action=readAll');

  }else{
return this.http.get('http://localhost/caniculeKitchen/src/app/services/API/'+table+'.php?action=readOne&id='+id);

  }
   
   
}

postData(table: any, data:any ): Observable<any>
{
  
   return this.http.post('http://localhost/caniculeKitchen/src/app/services/API/'+table+'.php?action=create', JSON.stringify(data));

}








}
