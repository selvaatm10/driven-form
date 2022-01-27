import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = "Angular";

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
