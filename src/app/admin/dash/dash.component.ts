import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  affSp=false
  affiTab=false
  tab:any[]=[]
  constructor(public crud:CrudService ,private ht:HttpClient ,private route:Router) { }

  ngOnInit(): void {
  }
  funcAffOff(){
   this.crud.afficheOff()
  }
  funcAffVila(){
    this.crud.afficheVila()
   }
   funcAffRent(){
    this.crud.afficheRent()
   }
   funcAffAppar(){
    this.crud.afficheApp()
   }
  funcAffAjOff(){
    this.crud.funcAj()
  }
  funcAffConsOff(){
   
    this.crud.funcAff()
  }
  affiheTab(){
    this.affSp=true
  this.ht.get(environment.baseURL+"/todo/").subscribe(res=>{
    var ob:any
    ob=res.valueOf()
    this.tab=ob
    console.log(this.tab)
    this.tab=this.tab.reverse()
    this.affSp=false
    this.affiTab=true
  })
  }
  loginOut(){
 this.route.navigate(['/login'])
  }
}
