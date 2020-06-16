import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService} from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  token = '';
  refreshToken ='';



  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('') 
  })

  constructor(
    private _authServ: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {

  }
  
  
  
  signin(){

    if(this.authForm.invalid){
      return; // implementer les validators
    }

    this._authServ.Signin(this.authForm.value).subscribe({
      
      next: (value) => {

        console.log(value);

        this._router.navigateByUrl('/params');
      },
      error: err=>console.log(err)
    }
    );

    console.log(this.authForm.value)
  }


}
