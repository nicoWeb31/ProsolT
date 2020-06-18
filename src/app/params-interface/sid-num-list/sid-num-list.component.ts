import { Component, OnInit } from '@angular/core';
import { InterfaceService } from '../interface.service';

@Component({
  selector: 'app-sid-num-list',
  templateUrl: './sid-num-list.component.html',
  styleUrls: ['./sid-num-list.component.css']
})
export class SidNumListComponent implements OnInit {
  
  numbers:any =[];
  toto:string = "toto"

  constructor(
    private interserv :InterfaceService,
  ) { }



  ngOnInit(): void {
    this.interserv.getNumberTest().subscribe((values)=>{
    console.log("SidNumListComponent -> ngOnInit -> value", values)
    this.numbers = values._embedded.numbers
    console.log("SidNumListComponent -> ngOnInit -> this.numbers", this.numbers)
      
    })
  }

}
