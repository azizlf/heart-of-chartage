
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup, FormGroupDirective, NgForm, FormArray } from '@angular/forms';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lunding-page-azizi',
  templateUrl: './lunding-page-azizi.component.html',
  styleUrls: ['./lunding-page-azizi.component.css']
})
export class LundingPageAziziComponent implements OnInit {

  //agm
// google maps zoom level
baseUrl=environment.baseURL
public zoom: number = 9;
 public point="aaaaaa" 
// initial center position for the map
public lat: number = 35.7884241;
public lng: number = -83.5543329;
public googleMapType = 'satellite';
public phone = "+971 58 218 9263"
public title = "ارسل الآن طلبك";

images = [
  {path: 'assets/images/img/IMG-20221117-WA0012.jpg'},
  {path: 'assets/images/img/IMG-20221117-WA0014.jpg'},
  {path: 'assets/images/img/IMG-20221107-WA0016.jpg'},
  {path: 'assets/images/img/IMG-20221107-WA0015.jpg'},
]
//agm
  user= new FormGroup({
 
    name: new FormControl('',[Validators.required ]),
   
    lastName: new FormControl(''),
    phone: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    typRef:new FormControl(""),
    typM:new FormControl(""),
    typB:new FormControl(""),
    date:new FormControl(""),
    DateN:new FormControl(""),
    country:new FormControl(""),
  
  })
  disable=false
  affichEtape2=false
  countrySelcted="dubai"
    sk=true
    al=false
    affichDF=false
    crid=false
    affDate=false
    date="حاليا"
    bud=false
    budj=false
    affForm=false
    affDat=false
    
    typRef='صالة وغرفة'
    typM='كاش' 
    typB="AED 1000000 -> AED 2000000"
    tabMony:string[]=["طريقة الدفع",'كاش ','تمويل بنكي']
    tabsaken:string[]=["شقة او محل تجاري","   غرفة وصالة   "," غرفتين وصالة   ","        ثلاثة غرف وصالة ","محل تجاري"] 
    //tabIsthmar:string[]=["محل تجاري","شركة","عمارة " ] 
    tabBudjet:string[]=["ميزانية الممكنة لشراء","AED 500000-> AED 1000000","AED 1000000 -> AED 2000000","more than AED 2000000"]
    tabDate:string[]=["متى تريد الشراء",'حاليا',' من شهر الى ثلاثة اشهر ','  غير ذالك']

constructor(private http:HttpClient ) { }
  
    ngOnInit(): void {
      console.log("sadraoui habib")
      
  /*const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8',"aut":""});
  
const requestOptions = { headers: headers };
this.http
    .post('http://localhost:8001/events.php', requestOptions)
    .subscribe((res: any) => {
        console.log(res);
    });*/
     /* AOS.init();
      AOS.refresh();*/
    
    }
    Navigate(elem: HTMLElement ) {
      elem.scrollIntoView({ behavior: 'smooth' });
      }
 
    selectS(i:any){
      
      this.typRef=this.tabsaken[i.target.value]
    
      console.log(5)
      this.budj=true
    }
    selectB(i:any){
      
      this.typB =this.tabBudjet[i.target.value]
     
      console.log(5)
      this.crid=true
    }
    selectM(i:any){
      
      this.typM=this.tabMony[i.target.value]
     
      
      console.log(5)
      this.affDate=true
    }
    selectD(i:any){
      
      this.date=this.tabDate[i.target.value]
     
      console.log(5)
      this.affForm=true
    }
    enregisterClient(){
      this.user.get("typB")?.setValue(this.typB)
      this.user.get("typRef")?.setValue(this.typRef)
      this.user.get("DateN")?.setValue(Date())
      this.user.get("country")?.setValue(this.countrySelcted)
      this.user.get("typM")?.setValue(this.typM)
      console.log(this.user.value)
      this.al=true
      /*this.http.post(this.baseUrl +'/todo/c/',this.user.value).subscribe(res=>{
       
        console.log(res.valueOf())
      })
     
      this.http.post(this.baseUrl +'/email/send-mail1/',this.user.value).subscribe(res=>{
        console.log(res)})*/
      
  }
  funcaffichEtape2(){
    this.affichEtape2=true
  }
  country(e:any){
    this.countrySelcted=e.target.value
  }

  }
