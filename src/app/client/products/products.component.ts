import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  loading=false
  tab:any=[]=[]


  constructor(private http:HttpClient , private route:Router) { }

  ngOnInit(): void {
    
    this.loading=true
    this.http.get(environment.baseURL+"/vila/").subscribe(res=>{
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
nav2(i:any){
  this.route.navigate(["/Vila",this.tab[i]._id])
}

}
