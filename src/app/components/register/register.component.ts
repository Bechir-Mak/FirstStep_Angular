import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  active = true;
  constructor() { }
  name ="bechir"
  dataList = [
    {
      name: 'bechir', code:1 , adresse :"deushland"
    },
    {
      name: 'behe', code: 2, adresse : "tunisie"
    }

  ]
  ngOnInit(): void {
  }

}
