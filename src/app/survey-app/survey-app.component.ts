import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey-app',
  templateUrl: './survey-app.component.html',
  styleUrls: ['./survey-app.component.css']
})
export class SurveyAppComponent implements OnInit {

  constructor() { }

  elementSurvey:any
  phoneScreen:any
  step = 0

  questions = [

    {
      question:"Do you want to own a property in Dubai from $30,000 with a free visa + 3 days in a 5 star hotel + the possibility to pay in digital currency?",
      type:"default",
      choices:[],
    },
    {
      question:"What type of property do you want?",
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
    },
    {
      question:"What's the right amount for you?",
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
    },
    {
      question:"What is your preferred payment method?",
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
    },
    {
      question:"Would you like a free estimate?",
      type:"estimate",
      choices:[],
    }

  ]

  currentQuestion:any = [this.questions[0]]

  choiceId = ""

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
  estimate:any = [this.questions[4]]


  nextQuestionCL(ans:any){

    var checkAnswer = false
    var formOpen = ""

    if(ans === "yes" || ans === "no" || ans === "yes-form"){
      
      this.answers.push({question:this.currentQuestion[0].question,answer:ans+""})
      checkAnswer = true
      formOpen = ans

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

        if(formOpen === "yes-form"){

          this.elementSurvey = document.getElementById("formClient")

          this.elementSurvey.style.display="flex"

        }else{

          this.elementSurvey = document.getElementById("finishedSurvey")

          this.elementSurvey.style.display="block"

        }

      }

    }

    this.choiceId = ""
    
  }

  finishFormClient(){

    this.elementSurvey = document.getElementById("formClient")

    this.elementSurvey.style.display="none"

    this.elementSurvey = document.getElementById("finishedSurvey")

    this.elementSurvey.style.display="block"

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
    this.elementSurvey.style.top="22%"
    this.elementSurvey.style.left="42%"

  }

  nextQuestion(ans:any,isChoicesNext:any){

    var checkAnswer = false

    var formOpen = ""

    if(ans === "yes" || ans === "no" || ans === "yes-form"){
      
      this.answers.push({question:this.currentQuestion[0].question,answer:ans+""})
      checkAnswer = true
      formOpen = ans

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

        this.choices = ""

        this.elementSurvey = document.getElementById("skipBtn")

        this.elementSurvey.style.opacity="0"

        this.elementSurvey.style.pointerEvents="none"

        this.finishedSurveyAnimation()

        this.elementSurvey = document.getElementById("contentQuestions")

        this.elementSurvey.style.display="none"

        if(formOpen === "yes-form"){

          this.elementSurvey = document.getElementById("formClientMobile")

          this.elementSurvey.style.display="flex"

        }else{

          this.elementSurvey = document.getElementById("thankText")

          this.elementSurvey.style.display="block"

          setTimeout(()=>{
            this.elementSurvey = document.getElementById("backBtn")
            this.elementSurvey.style.display="block"

          },2000)


        }

      }
    }
  }

  finishFormClientMobile(){

    this.elementSurvey = document.getElementById("formClientMobile")
    
    this.elementSurvey.style.display="none"

    this.elementSurvey = document.getElementById("thankText")
    
    this.elementSurvey.style.display="block"

    setTimeout(()=>{
      this.elementSurvey = document.getElementById("backBtn")
      this.elementSurvey.style.display="block"

    },800)    

  }

  backFromSurvey(){

    this.elementSurvey = document.getElementById("surveyContainer")
    
    this.elementSurvey.style.display="none"   

  }

  ngOnInit(): void {

    this.phoneScreen = window.matchMedia('(max-width: 700px)')

    if(this.phoneScreen.matches){  
      setTimeout(()=>{
        this.animationEleSurvey()
      },20000)

    }else{

      setTimeout(()=>{
        this.surveyCLOpen()   
      },20000)

    }
  }

}
