import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators } from '@angular/forms';

@Component({
  selector: 'app-rdf',
  templateUrl: './rdf.component.html',
  styleUrls: ['./rdf.component.css']
})
export class RdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    fname:new FormControl('',[Validators.required,Validators.minLength(4)]),
    lname:new FormControl('',[Validators.required,Validators.minLength(4)]),
    email:new FormControl('',[Validators.required,Validators.minLength(6)]),
    pswd:new FormControl('',[Validators.required,Validators.minLength(6)]),
    city:new FormControl('',[Validators.required,Validators.minLength(4)]),
    pin:new FormControl('',[Validators.required,Validators.minLength(6)])
  })

  get fname(){
    return this.loginForm.controls;
  }
  get lname(){
    return this.loginForm.controls;
  }
  get email(){
    return this.loginForm.controls;
  }
  get pswd(){
    return this.loginForm.controls;
  }
  get city(){
    return this.loginForm.controls;
  }
  get pin(){
    return this.loginForm.controls;
  }

}
