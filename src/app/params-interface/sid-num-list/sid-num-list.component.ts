import { Component, OnInit } from '@angular/core';
import { InterfaceService } from '../interface.service';


interface numbers{

  name: string;
  number: string;
  type: string;
  setting?: object;
 
}



@Component({
  selector: 'app-sid-num-list',
  templateUrl: './sid-num-list.component.html',
  styleUrls: ['./sid-num-list.component.css']
})
export class SidNumListComponent implements OnInit {
  
  numbers: numbers;
  toto:string = "toto"

  constructor(
    private interserv :InterfaceService,
  ) { }



  ngOnInit(): void {
    this.interserv.getNumbers().subscribe((values)=>{
    console.log("SidNumListComponent -> ngOnInit -> value", values)
    this.numbers = values._embedded.numbers
    console.log("SidNumListComponent -> ngOnInit -> this.numbers", this.numbers)
    console.log("SidNumListComponent -> ngOnInit -> values._embedded.numbers", values._embedded.numbers[0].number)

      
    })
  }

}
