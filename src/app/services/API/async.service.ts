import { Injectable } from '@angular/core';
import {Observable, firstValueFrom, isObservable} from "rxjs";
declare let Zone:any



@Injectable({
  providedIn: 'root'
})
export class AsyncService {

  constructor() { }

Zone: any;

async waitforResponse<T>(prom:Promise<T> | Observable<T>): Promise<T>
{
if (isObservable(prom))
{
  prom=firstValueFrom(prom);

}
  const macroTask= Zone.current.scheduleMacroTask(
  'WAIT FOR-${Math.random()}',
  ()=>{},
  {},
  ()=>{}
  );
  return prom.then((p: T)=>{

macroTask.invoke();
return p



  })


  


}




}



