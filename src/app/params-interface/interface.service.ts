import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NumberTel } from './models/NumberTel';


interface Numb{

  name: string
  number: string
  settings: object
  type: string
  user_id: number

}



@Injectable({
  providedIn: 'root'
})
export class InterfaceService {

  urlGetNumber = 'http://0.0.0.0:8080' //'http://api-extranet.com'

  constructor(
    private http: HttpClient
  ) { }

 
  getNumbers(){
    return this.http.get<NumberTel>(`${this.urlGetNumber}/numbers`);
  }


  getNumber(id:string){
    return this.http.get<Numb>(`${this.urlGetNumber}/numbers/${id}`)
  }



}
