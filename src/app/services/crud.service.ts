import { HttpClient } from '@angular/common/http';
import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
//affiche Global
public  lat: number = 51.673858;
  public lng: number = 7.815982;
  offPlanModif:any
  affAd=true
project=""
baseUrl=environment.baseURL
affUser=false
affVila=false
affRent=false
affOff=false
affAppr=false
public loading=false
public lod=false
loadingAppr=false
loadingRent=false
loadingOff=false
loadingVila=false
tabCarc:any[]=[]

//affiche local
aj=false
ac=false
loadingDelete=false

  constructor(private http:HttpClient) { }
  ajout(obj:any,url:string){
    this.http.post(this.baseUrl+url,obj).subscribe(res=>{
      this.loading=true
    if(res.valueOf()){
    this.loading=false
    alert("secssful registre !")
    }
    })

  }
  getSingle(url:string){
    this.loading=true
    console.log(this.baseUrl+url)
    var Url=this.baseUrl+url
   
   return  this.http.get(Url.toString())
  }
  delet(id:any,url:string){
  this.loading=true
 return this.http.delete(this.baseUrl+url+id+"/")
 

  }

  afficheOff(){
    this.affOff=true
    this.affRent=false
    this.affVila=false
   this.affAppr=false
   this.affUser=false
  } 
  afficheVila(){
    this.affOff=false
    this.affRent=false
    this.affVila=true
   this.affAppr=false
   this.affUser=false
  } 
  afficheApp(){
    this.affOff=false
    this.affRent=false
    this.affVila=false
   this.affAppr=true
   this.affUser=false
  }
  afficheRent(){
    this.affOff=false
    this.affRent=true
    this.affVila=false
   this.affAppr=false
   this.affUser=false
  } 
  afficheUser(){
    this.affOff=false
    this.affRent=false
    this.affVila=false
   this.affAppr=false
   this.affUser=true
  } 
  funcAj(){
 this.ac=false
 this.aj=true
  }
  funcAff(){
   this.ac=true
   this.aj=false
  }
}
