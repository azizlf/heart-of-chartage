import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-update-offplan',
  templateUrl: './update-offplan.component.html',
  styleUrls: ['./update-offplan.component.css']
})
export class UpdateOffplanComponent implements OnInit {
  api=environment.baseURL
  constructor(public crud:CrudService,public http: HttpClient) { }

  ngOnInit(): void {
  }
  modifier(){
    this.http.put(this.api+'/off/'+this.crud.offPlanModif._id+"/" , this.crud.offPlanModif).subscribe((res:any)=>{
   if(res.message==true){
     alert("modif secsseful")
   }
    })
    }
}
