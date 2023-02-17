import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router,ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/app/services/crud.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-lund3',
  templateUrl: './lund3.component.html',
  styleUrls: ['./lund3.component.css']
})
export class Lund3Component implements OnInit {
  public  loadingOff=false
  public title=""
  public stitle=""
  public desc=""
  public imgs=""
  public prix=""
  video: any;

  public prixFinal=""




  tabim:any[]=[]
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  }
  images = [
    {path: 'assets/images/IMG-20221117-WA0012.jpg'},
    {path: 'assets/images/IMG-20221117-WA0014.jpg'},
    {path: 'assets/images/IMG-20221107-WA0016.jpg'},
    {path: 'assets/images/IMG-20221107-WA0015.jpg'},
  ]
  constructor(private route:ActivatedRoute,private http:HttpClient,public crud:CrudService , private sanitizer: DomSanitizer) { 
    this.crud.loadingOff=true  
      this.http.get(environment.baseURL+"/appr/"+this.route.snapshot.paramMap.get('id')+"/").subscribe(res=>{
       if(res.valueOf()){
          var ob:any         
           ob=res.valueOf()  
           this.title=ob.title
           this.crud.project=ob.title
           this.desc=ob.desc
           this.stitle=ob.stitle
           this.video=ob.video
           this.prix=ob.prix
           this.crud.lat=ob.lat
           this.crud.lng=ob.lng
           this.prixFinal=ob.prixFinal
           this.crud.tabCarc=ob.carc
           this.imgs=ob.imgs
           this.video =  this.sanitizer.bypassSecurityTrustResourceUrl(ob.video);
        //     this.off=ob          
        ////console.log(imgs)
        console.log(this.video)
        // this.tabim=this.off.imgs
         this.loadingOff=false
       }
  })
  }

  ngOnInit(): void {
  
  }

}
