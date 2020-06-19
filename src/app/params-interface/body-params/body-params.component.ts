import { Component, OnInit } from '@angular/core';

//recut de l'id avec
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-body-params',
  templateUrl: './body-params.component.html',
  styleUrls: ['./body-params.component.css']
})
export class BodyParamsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
  }

}
