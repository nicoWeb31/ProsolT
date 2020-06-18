import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NumberTel } from './models/NumberTel';

@Injectable({
  providedIn: 'root'
})
export class InterfaceService {

  urlGetNumber = 'http://api-extranet.com/numbers'

  constructor(
    private http: HttpClient
  ) { }

 
  getNumberTest(){
    return this.http.get<NumberTel>(this.urlGetNumber);
  }



}
