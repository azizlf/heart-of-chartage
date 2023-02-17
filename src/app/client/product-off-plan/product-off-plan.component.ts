import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-off-plan',
  templateUrl: './product-off-plan.component.html',
  styleUrls: ['./product-off-plan.component.css']
})
export class ProductOffPlanComponent implements OnInit {

  loading=false
  tab:any=[]=[]


  constructor(private http:HttpClient , private route:Router) { }

  ngOnInit(): void {
    
    this.loading=true
    this.http.get(environment.baseURL+"/off/").subscribe(res=>{
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
navRent(i:any){
  this.route.navigate(["/Off-Plan",this.tab[i]._id])
}

}