import { Component, OnInit } from '@angular/core';
import { InterfaceService } from '../../interface.service';
import { ActivatedRoute } from '@angular/router';
import { NumTel } from '../../models/numTel.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-info-g',
  templateUrl: './info-g.component.html',
  styleUrls: ['./info-g.component.css']
})
export class InfoGComponent implements OnInit {

numTel: NumTel

  constructor(
    private interServ: InterfaceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  
    this.route.params.pipe(
      switchMap(({id})=>{
        return this.interServ.getNumber(id);
      })
    ).subscribe((num)=>{
      this.numTel = num
    })

  }

}
