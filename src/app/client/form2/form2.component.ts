import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup, FormGroupDirective, NgForm, FormArray } from '@angular/forms';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CrudService } from 'src/app/services/crud.service';
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  baseUrl=environment.baseURL
  
  images = [
    {path: 'assets/img/IMG-20221117-WA0012.jpg'},
    {path: 'assets/img/IMG-20221117-WA0014.jpg'},
    {path: 'assets/img/IMG-20221107-WA0016.jpg'},
    {path: 'assets/img/IMG-20221107-WA0015.jpg'},
  ]
  //agm
    user= new FormGroup({
   
      name: new FormControl('',[Validators.required ]),
     
      lastName: new FormControl(''),
      phone: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
     
      project:new FormControl(""),
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
      
  
  constructor(private http:HttpClient,private crud:CrudService ) { }
    
      ngOnInit(): void {}
  //       const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8',"aut":""});
    
  // const requestOptions = { headers: headers };
  // this.http
  //     .post('http://localhost:8001/events.php', requestOptions)
  //     .subscribe((res: any) => {
  //         console.log(res);
  //     });
       /* AOS.init();
        AOS.refresh();*/
      //   this.cokis.set('Test', 'Hello World');
  
      //  console.log(this.cokis.getAll(),"fff") 
     
      // Navigate(elem: HTMLElement ) {
      //   elem.scrollIntoView({ behavior: 'smooth' });
      //   }
   
     
      enregisterClient(){
     
        this.user.get("DateN")?.setValue(Date())
        this.user.get("country")?.setValue(this.countrySelcted)

        this.user.get('project')?.setValue(this.crud.project)
        console.log(this.user.value)
        this.al=true
        this.http.post(this.baseUrl +'/todo/c/',this.user.value).subscribe(res=>{
         
          console.log(res.valueOf())
        })
       
        this.http.post(this.baseUrl +'/email/send-mail1/',this.user.value).subscribe(res=>{
          console.log(res)})
          
        this.http.post(this.baseUrl +'/email/send-mail/',this.user.value).subscribe(res=>{
          console.log(res)})
        
    }
   
    country(e:any){
      this.countrySelcted=e.target.value
    }
  
    }
  