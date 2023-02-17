
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { ImgService } from 'src/app/services/img.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.css']
})
export class AppartementComponent implements OnInit {

  loadingImag=false
  formCatigorie:any //etape  1 : 
  selectF:any
  imgCat=""
  taher="habib"
 urlCreat="/appr/creat/"
  urlDelet="/appr/Delet/"
  tabCarc:string[]=[]
  carc=''

 tabappr:any[]=[]
  appr:any
   
  constructor(public crud:CrudService , public serIm:ImgService,private http:HttpClient) { 
    this.crud.loading=true
    
    // this.crud.getSingle(url).subscribe(res=>{
    // if(res.valueOf()){
    //   var ob:any
    //   ob=res.valueOf()
    //   this.tabappr=ob
    //   this.crud.loading=false
    
    // }
    // })^

 this.http.get(environment.baseURL+"/appr/").subscribe(res=>{
  if(res.valueOf()){
    console.log(res.valueOf())
    var ob:any
     ob=res.valueOf()
     this.tabappr=ob
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
    this.appr={
      title:"",
      stitle:"",
      desc:"",
      prix:"",
      bath:"",
      bed:"",
      surface:"",
      room:"",
      imageProfil:"",
      prixFinal:"",
      lat:  24.619185472680048 ,
      lng:  55.3883916685736,
      video:"",
      carc:[],
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
  
  console.log(this.appr)
  this.appr.imgs=this.serIm.tabImages
  this.appr.lng=this.crud.lng
  this.appr.lat=this.crud.lat
  this.appr.carc=this.tabCarc

   this.appr.imageProfil=this.serIm.tabImages[0]
   this.crud.ajout(this.appr,this.urlCreat)

 }
 sup(i:any){
  console.log(5)
  this.crud.loading=true
  
  console.log(this.tabappr[i])
 this.crud.delet(this.tabappr[i]._id,this.urlDelet).subscribe(res=>{
  if(res.valueOf()){
    var ob:any
     ob=res.valueOf()
     this.tabappr=ob
     
     this.crud.loading=false
    alert("secssful delet")
  }
 })
 }
}
