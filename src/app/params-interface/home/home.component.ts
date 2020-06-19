import { Component, OnInit } from '@angular/core';
import { InterfaceService } from '../interface.service';
import { NumberTel } from '../models/NumberTel';
import { Router } from '@angular/router'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  numbers: object = [];
  


  constructor(
    private _InterServ: InterfaceService,
    private route : Router
  ) { }

  ngOnInit(): void {
 
    //testnumber interceptor + refreshtoken
    // this._InterServ.getNumberTest().subscribe({
    //   next: (value: NumberTel)=>{
    //     console.log(value)
    //     let listnum = value._embedded.numbers;
    //     this.numbers = listnum;
    //     console.log(listnum)
    //   },
    //   error: err => console.error(err)
      
      

    // })

    console.log('getRefreshToken() : '+ localStorage.getItem('REFRESH_TOKEN'))
    console.log('getToken() : '+ localStorage.getItem('JWT_TOKEN'))


  
    
    
  }




}
