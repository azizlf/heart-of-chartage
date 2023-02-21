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

  questions = [

    {
      question:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page?",
      type:"default",
      choices:[],
      buttons:["yes","no"]
    },
    {
      question:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée ?",
      type:"plans",
      choices:[

        {
          image:"assets/images/images-survey/villa.png",
          title:"Villa",
        },
        {
          image:"assets/images/images-survey/apprt.png",
          title:"Appartement",
        },
        {
          image:"assets/images/images-survey/market-place.png",
          title:"Market Place",
        }

      ],
      buttons:["next"]
    },
    {
      question:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée ?",
      type:"budget",
      choices:[

        {
          image:"assets/images/images-survey/cash.png",
          title:"30,000",
        },
        {
          image:"assets/images/images-survey/cash.png",
          title:"50,000",
        },
        {
          image:"assets/images/images-survey/cash.png",
          title:"100,000 or more",
        }

      ],
      buttons:["next"]
    },
    {
      question:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée ?",
      type:"payment",
      choices:[

        {
          image:"assets/images/images-survey/cash.png",
          title:"Cash",
        },
        {
          image:"assets/images/images-survey/virement.png",
          title:"Bank Transfert",
        },
        {
          image:"assets/images/images-survey/crypto.png",
          title:"Cryptocurrency",
        }

      ],
      buttons:["next"]
    },
    {
      question:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page?",
      type:"default",
      choices:[],
      buttons:["yes","no"]
    }

  ]

  currentQuestion:any = [this.questions[0]]

  choiceId = ""

  surveyIsOpen = false

  answers:any = []

  getBgItemChoices(title:any){

    if(this.choiceId === title){
      return "#9c855f"
    }else{
      return "transparent"
    }

  }

  selectChoice(title:any){

    this.choiceId = title

  }

    
  surveyCLOpen(){

    this.elementSurvey = document.getElementById("surveyCtnCL")
    this.elementSurvey.style.display="flex"

  }

  surveyCLClose(){

    this.elementSurvey = document.getElementById("surveyCtnCL")
    this.elementSurvey.style.display="none"

  }

  choices = "default"
  plans:any = [this.questions[1]]
  payment:any = [this.questions[3]]
  budget:any = [this.questions[2]]


  nextQuestionCL(ans:any){

    var checkAnswer = false

    if(ans === "yes" || ans === "no"){
      
      this.answers.push({question:this.currentQuestion[0].question,answer:ans+""})
      checkAnswer = true

    }
    else{

      if(this.choiceId != ""){
        this.answers.push({question:this.currentQuestion[0].question,answer:this.choiceId+""})
        checkAnswer = true
      }

    }

    if(checkAnswer){
      
      this.elementSurvey = document.getElementById("progressBarSteps")


      this.elementSurvey.style.width = (this.answers.length / this.questions.length)*100+"%"

      this.step++
      if(this.step < this.questions.length){

        this.currentQuestion = [this.questions[this.step]]
      
        this.choices = this.currentQuestion[0].type


      }else{

        this.elementSurvey = document.getElementById("contentQuestions")

        this.elementSurvey.style.display="none"

        this.elementSurvey = document.getElementById("finishedSurvey")

        this.elementSurvey.style.display="block"

        console.log(this.answers)

      }

    }

    this.choiceId = ""
    
  }

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

  nextQuestion(ans:any,isChoicesNext:any){

    var checkAnswer = false

    if(ans === "yes" || ans === "no"){
      
      this.answers.push({question:this.currentQuestion[0].question,answer:ans+""})
      checkAnswer = true

    }
    else{

      if(this.choiceId != ""){
        this.answers.push({question:this.currentQuestion[0].question,answer:this.choiceId+""})
        checkAnswer = true
      }

    }

    if(checkAnswer){

      this.elementSurvey = document.getElementById("progressBarSteps")

      this.elementSurvey.style.width = (this.answers.length / this.questions.length)*100+"%"

      this.elementSurvey = document.getElementById("questionSurvey")

      this.elementSurvey.style.display="none"

      this.elementSurvey = document.getElementById("btnYes")

      this.elementSurvey.style.display="none"

      this.elementSurvey = document.getElementById("btnNo")

      this.elementSurvey.style.display="none"

      this.step++

      if(this.step < this.questions.length){

        this.currentQuestion = [this.questions[this.step]]
      
        this.choices = this.currentQuestion[0].type

        setTimeout(()=>{

          this.elementSurvey = document.getElementById("questionSurvey")

          this.elementSurvey.style.display="block"

          this.elementSurvey = document.getElementById("btnYes")

          this.elementSurvey.style.display="block"

          if(!isChoicesNext){
            this.elementSurvey = document.getElementById("btnNo")

            this.elementSurvey.style.display="block"
          }

        },300)

      }
      else{

        this.elementSurvey = document.getElementById("skipBtn")

        this.elementSurvey.style.opacity="0"

        this.elementSurvey.style.pointerEvents="none"

        this.finishedSurveyAnimation()

        this.elementSurvey = document.getElementById("contentQuestions")

        this.elementSurvey.style.display="none"

        this.elementSurvey = document.getElementById("finishedSurvey")

        this.elementSurvey.style.display="block"

        console.log(this.answers)

      }
    }
  }

  backFromSurvey(){

    this.elementSurvey = document.getElementById("surveyContainer")
    
    this.elementSurvey.style.display="none"

    this.surveyIsOpen = false    

  }



  ngOnInit() {

    this.phoneScreen = window.matchMedia('(max-width: 700px)')

    if(this.phoneScreen.matches){  
      setTimeout(()=>{
        this.animationEleSurvey()
        this.surveyIsOpen = true    
      },20000)

    }else{

      setTimeout(()=>{
        this.surveyCLOpen()   
      },300)

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
