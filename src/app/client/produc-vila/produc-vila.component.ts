import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-produc-vila',
  templateUrl: './produc-vila.component.html',
  styleUrls: ['./produc-vila.component.css']
})
export class ProducVilaComponent implements OnInit {

  loading=false
  tab:any=[]=[]


  constructor(private http:HttpClient , private route:Router) { }

  ngOnInit(): void {
    
    this.loading=true
    this.http.get(environment.baseURL+"/rent/").subscribe(res=>{
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
  this.route.navigate(["/Rent",this.tab[i]._id])
}

}
