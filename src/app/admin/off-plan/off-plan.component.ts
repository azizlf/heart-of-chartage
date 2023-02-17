
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { ImgService } from 'src/app/services/img.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-off-plan',
  templateUrl: './off-plan.component.html',
  styleUrls: ['./off-plan.component.css']
})
export class OffPlanComponent implements OnInit {
  loadingImag=false
  formCatigorie:any //etape  1 : 
  selectF:any
  imgCat=""
  taher="habib"
 urlCreat="/off/creat/"
  urlDelet="/off/Delet/"
  tabCarc:string[]=[]
  carc=''
 tabOff:any[]=[]
  off:any
   
  constructor(public crud:CrudService , public serIm:ImgService,private http:HttpClient) { 
    this.crud.loading=true
    
    // this.crud.getSingle(url).subscribe(res=>{
    // if(res.valueOf()){
    //   var ob:any
    //   ob=res.valueOf()
    //   this.tabOff=ob
    //   this.crud.loading=false
    
    // }
    // })^

 this.http.get(environment.baseURL+"/off/").subscribe(res=>{
  if(res.valueOf()){
    console.log(res.valueOf())
    var ob:any
     ob=res.valueOf()
     this.tabOff=ob
     this.crud.loading=false
  }
  
 })
  }
  ajoutCarc(){
    this.tabCarc.push(this.carc)
  }
  supCarc(i:any){
    this.tabCarc.splice(i,1);
  }
  ngOnInit(): void {
    this.off={
      title:"",
      stitle:"",
      desc:"",
      prix:"",
      imageProfil:"",
      prixFinal:"",
      video:"",
      dev:"",
        carc:[],
        lat:  24.619185472680048 ,
       lng:  55.3883916685736,
      imgs:[]
     }
  }
  selectFile(e:any){
     console.log("aaa")
    this.loadingImag=true
    this.selectF=<File>e.target.files[0]
    this.serIm.registreImage(this.selectF)
    
  }
 ajout(){
  
  console.log(this.off)
  this.off.imgs=this.serIm.tabImages
    this.off.lng=this.crud.lng
    this.off.lat=this.crud.lat
    this.off.carc=this.tabCarc
   this.off.imageProfil=this.serIm.tabImages[0]
   this.crud.ajout(this.off,this.urlCreat)

 }
 sup(i:any){
  console.log(5)
  this.crud.loading=true
  
  console.log(this.tabOff[i])
 this.crud.delet(this.tabOff[i]._id,this.urlDelet).subscribe(res=>{
  if(res.valueOf()){
    var ob:any
     ob=res.valueOf()
     this.tabOff=ob
     this.crud.loading=false
    alert("secssful delet")
  }
 })
 }
}
