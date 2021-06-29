import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  name = "bechir";
  age = 24;
  adresse = "Sousse";
  status = "activé"

  nom ='';
  result ="";

  constructor(
    private router: Router
  ) { }

  toRegister() {
    this.router.navigate(["/register"])
  }
  ngOnInit(): void {
  }

  direBonjour(){
    this.result = this.nom;
  }

  getStatus() {
    return this.status;
  }



}
