import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header-params',
  templateUrl: './header-params.component.html',
  styleUrls: ['./header-params.component.css']
})
export class HeaderParamsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {

    this.route.params.subscribe(
      ({id}) => {
      console.log("HeaderParamsComponent -> ngOnInit -> id", id)
      //console.log("BodyParamsComponent -> ngOnInit -> params", params)
      
      // get num by id

      

    }
    )
  }
    
        
    


}
