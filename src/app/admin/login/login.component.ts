import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pass=""
  log=""

  constructor(private route :Router) { }

  ngOnInit(): void {
  }
  login(){
    if(this.pass=="93200115" && this.log=="Iheb90")
    {
    this.route.navigate(["/admin"])
    }
   else{
    alert("password or login  incorrect")
   } 

   }
}
