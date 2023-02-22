import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImgService {

 public loadingImag=false
 public loadingImagSingle=false
  imageName="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMzJV4M6Jj0DPf2zTibqNio9C_7RMC9D3N3A&usqp=CAU"
  imageNameSingle="assets/images/logoPh.png"
  baseurl1=environment.baseURL
 
  tabImages:any[]=[]

  constructor(private ht:HttpClient) { }
registreImage(file:any){
  this.loadingImag=true
  var fd=new FormData
  console.log(this.loadingImag)


  fd.append('image',file,file.name)
  this.ht.post(this.baseurl1+'/upload/',fd).subscribe(res=>{
    var image :any
   image=res.valueOf()
    console.log(image)
   this.imageName=this.baseurl1+"/uploads/"+ image.name
   this.tabImages.push(this.imageName)
   console.log(this.imageName,"aaaa")})
 this.loadingImag=false
 console.log(this.loadingImag)
  
}
registreImageSingle(file:any){
  this.loadingImagSingle=true
  var fd=new FormData
  console.log(this.loadingImag)


  fd.append('image',file,file.name)
  this.ht.post(this.baseurl1+'/upload/',fd).subscribe(res=>{
    var image :any
   image=res.valueOf()
    console.log(image)
   this.imageNameSingle=this.baseurl1+"/uploads/"+ image.name
   this.loadingImagSingle=false
   })


  
}
}
