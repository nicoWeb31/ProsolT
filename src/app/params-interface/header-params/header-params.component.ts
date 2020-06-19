import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterfaceService } from '../interface.service';

@Component({
  selector: 'app-header-params',
  templateUrl: './header-params.component.html',
  styleUrls: ['./header-params.component.css']
})
export class HeaderParamsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private interfServ: InterfaceService
  ) {}


  ngOnInit(): void {

    this.route.params.subscribe(
      ({id}) => {
      console.log("HeaderParamsComponent -> ngOnInit -> id", id)
      // get num by id
      this.interfServ.getNumber(id).subscribe(number =>{
      console.log("HeaderParamsComponent -> ngOnInit -> number", number)
    })
        

    }
    )






      

  }
    
        
    


}
