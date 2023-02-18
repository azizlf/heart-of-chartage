import { Component } from '@angular/core';
import { MessagingService } from './services/messaging.service';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
//import { SeoService } from './services/seo.service';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Heart Of Carthage Real Estate Dubai';
  message:any
  public phone = "+971 58 218 9263"
  public messg = "ارسل الآن طلبك";
  constructor(private  messagingService:MessagingService ,private http:HttpClient,private meta:Meta){

  }
  
  elementSurvey:any
  phoneScreen:any
  step = 0

  questions = ["question number 1?","question number 2?","question number 3?"]

  currentQuestion = this.questions[0]
  
  animationEleSurvey(){

    this.elementSurvey = document.getElementById("surveyContainer")
    this.elementSurvey.style.display="block"

    setTimeout(()=>{
      this.elementSurvey = document.getElementById("logoSurvey")
      this.elementSurvey.style.transform="scale(1)"
      this.elementSurvey.style.top="5%"
      this.elementSurvey.style.left="2%"
    },1200)

    setTimeout(()=>{
      this.elementSurvey = document.getElementById("nameLogo")
      this.elementSurvey.style.display="block"

    },2600)

    setTimeout(()=>{
      this.elementSurvey = document.getElementById("questionSurvey")
      this.elementSurvey.style.display="block"

    },3600)

    setTimeout(()=>{
      this.elementSurvey = document.getElementById("btnYes")
      this.elementSurvey.style.display="block"
      this.elementSurvey = document.getElementById("btnNo")
      this.elementSurvey.style.display="block"

    },4000)

    setTimeout(()=>{
      this.elementSurvey = document.getElementById("skipBtn")
      this.elementSurvey.style.opacity="1"
      this.elementSurvey.style.pointerEvents="all"

    },5600)



  }

  finishedSurveyAnimation(){

    this.elementSurvey = document.getElementById("nameLogo")
    this.elementSurvey.style.display="none"
    this.elementSurvey = document.getElementById("logoSurvey")
    this.elementSurvey.style.transform="scale(2)"
    this.elementSurvey.style.top="30%"
    this.elementSurvey.style.left="40%"

    setTimeout(()=>{
      this.elementSurvey = document.getElementById("thankText")
      this.elementSurvey.style.display="block"
    },1200)

    setTimeout(()=>{
      this.elementSurvey = document.getElementById("backBtn")
      this.elementSurvey.style.display="block"

    },2000)

  }

  nextQuestion(){

    this.elementSurvey = document.getElementById("questionSurvey")

    this.elementSurvey.style.display="none"

    this.elementSurvey = document.getElementById("btnYes")

    this.elementSurvey.style.display="none"

    this.elementSurvey = document.getElementById("btnNo")

    this.elementSurvey.style.display="none"

    if(this.step < (this.questions.length-1)){

      this.step++

      this.currentQuestion = this.questions[this.step]

      setTimeout(()=>{

        this.elementSurvey = document.getElementById("questionSurvey")

        this.elementSurvey.style.display="block"

        this.elementSurvey = document.getElementById("btnYes")

        this.elementSurvey.style.display="block"

        this.elementSurvey = document.getElementById("btnNo")

        this.elementSurvey.style.display="block"

      },300)

    }else{

      this.elementSurvey = document.getElementById("skipBtn")

      this.elementSurvey.style.opacity="0"

      this.elementSurvey.style.pointerEvents="none"

      this.finishedSurveyAnimation()

    }

  }

  backFromSurvey(){

    this.elementSurvey = document.getElementById("surveyContainer")
    
    this.elementSurvey.style.display="none"

    this.surveyIsOpen = false    

  }

  surveyIsOpen = false

  ngOnInit() {

    this.phoneScreen = window.matchMedia('(max-width: 700px)')

    if(this.phoneScreen.matches){  
      setTimeout(()=>{
        this.animationEleSurvey()
        this.surveyIsOpen = true    
      },5000)

    }

    this.meta.addTags([
      {
        name: 'keywords',
        content:'estate dubai ,real estate, vila dubai, real estate developers dubai, azizi,عقارات  دبي,منازل  في دبي, ابراج دبي' // Keywords

      },
      { name: 'robots', content: 'index, follow' },
      { name: 'description', content: 'Pick your Property with heartofcarthage and enjoy with our best offer   Find your Perfect Property in dubai with us.  Luxuary Properties, Wonderful Views , the comfortable life in waiting for you ' },

    ]);
    this.messagingService.requestPermission()
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage



















  //   const headers = new HttpHeaders({'Content-Type':'application/json','Authorization':"czEAEx7YWFnCC8Ei3wBBdv:APA91bEOyuQ0J4h2oD_OM2n292PsNI4bZX4pe1C2wTpg0ExGiecP3j"});
  //  var noti=  {notification: {
  //   title: "Hey there",
  //   body: "Subscribe to mighty ghost hack youtube channel"
  //  },
  //  to : "uFvjswjLphkOzCEO0OcgM7yQGmzCZ7pKaFZ3iBhGJH4IxDlw9VIagvCVqFtFJ1a1esQqkKJG4jBtI58foa7CnB"
  // }
    // const requestOptions = { headers: headers };
    // this.http
    //     .post('https://fcm.googleapis.com/fcm/send/',noti, requestOptions )
    //     .subscribe(res => {
    //       console.log(res);
    //     });
   ;


}

}
