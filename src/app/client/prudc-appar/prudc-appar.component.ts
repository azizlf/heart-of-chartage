import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-prudc-appar',
  templateUrl: './prudc-appar.component.html',
  styleUrls: ['./prudc-appar.component.css']
})
export class PrudcApparComponent implements OnInit {
  loading=false
  tab:any=[]=[]


  constructor(private http:HttpClient , private route:Router) { }

  ngOnInit(): void {
    
    this.loading=true
    this.http.get(environment.baseURL+"/appr/").subscribe(res=>{
      if (res.valueOf()){
        var   ob:any
        ob=res.valueOf()
  
        this.tab=ob
        this.tab= this.tab.reverse()
        this.loading=false
       
        console.log(this.tab)
       
      }
     
  })
}
navAppr(i:any){
  this.route.navigate(["/Appr",this.tab[i]._id])
}
}
