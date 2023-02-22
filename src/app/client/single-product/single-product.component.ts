import { Component, OnInit , Renderer2 } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router,ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/app/services/crud.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  public imageProfil=""
  public  loadingOff=false
  public dev=""
  public title=""
  public stitle=""
  public desc=""
  public imgs:any[]=[]
  public prix=""
  video: any;
  public phone = "+971 58 218 9263"
  public prixFinal=""

  public sections = 4;

  public  scroll = 0;

  public selected = false;


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
  constructor(private renderer:Renderer2,private route:ActivatedRoute,private http:HttpClient,public crud:CrudService , private sanitizer: DomSanitizer) { 
   
  }

  bgImageSelected = ""
  bgFullScreenSlider = ""
  isSliderFullScreen = false

  counter_slider = 0

  nextSlide(){

    if(this.counter_slider < (this.imgs.length-1)){
      this.counter_slider++
    }

    this.bgFullScreenSlider = this.imgs[this.counter_slider].path

  }


  prevSlide(){

    if(this.counter_slider != 0){
      this.counter_slider--
    }

    this.bgFullScreenSlider = this.imgs[this.counter_slider].path

  }

  selectImage(src:any){

    this.bgImageSelected = src

  }

  openFullScreen(){

    this.isSliderFullScreen = true

  }
  
  closeFullScreen(){

    this.isSliderFullScreen = false

  }


  getLogoDevp(dev){

    const devp_name = dev.toLowerCase().split(' ').join('') 

    return "/assets/images/developers/"+devp_name+".png" 

  }

  ngOnInit(): void {

    this.renderer.listen(window, 'scroll', ($event) => {
      this.scroll = (window.scrollY / this.sections);
    })

    this.loadingOff=true  
    this.http.get(environment.baseURL+"/off/"+this.route.snapshot.paramMap.get('id')+"/").subscribe(res=>{
    if(res.valueOf()){
        var ob:any         
         ob=res.valueOf()  
         this.title=ob.title
         this.crud.project=ob.title
         this.imageProfil=ob.imageProfil
         this.desc=ob.desc
         this.stitle=ob.stitle
         this.video=ob.video
         this.prix=ob.prix
         this.crud.lat=ob.lat
         this.dev=ob.dev
         this.crud.lng=ob.lng
         this.prixFinal=ob.prixFinal
        
         for (let i = 0; i < ob.imgs.length; i++) {
        var img ={
          path: ob.imgs[i]
        }
        this.imgs.push(img)
        }

        this.bgImageSelected = this.imgs[0].path
        this.bgFullScreenSlider = this.imgs[0].path
        this.crud.tabCarc=ob.carc
        this.video =  this.sanitizer.bypassSecurityTrustResourceUrl(ob.video);
      /*//     this.off=ob          
      ////console.log(imgs)
      console.log(this.video)
      // this.tabim=this.off.imgs
      console.log( this.title)
      console.log(ob,'aabb')
      console.log(this.crud.tabCarc,'eeeee')*/
       this.loadingOff=false
     }
    })
    
  }

}