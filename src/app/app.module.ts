import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireMessagingModule } from '@angular/fire/messaging' ; 
import { AngularFireDatabaseModule } from '@angular/fire/database' ; 
import { AngularFireAuthModule }  from '@angular/fire/auth' ; 
import { AngularFireModule }from '@angular/fire' ; 
import { MessagingService }from './services/messaging.service' ; 
import { environment } from 'src/environments/environment';
import { AsyncPipe } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { AceuilComponent } from './client/aceuil/aceuil.component';
import { HeaderComponent } from './client/header/header.component';
import { FooterComponent } from './client/footer/footer.component';
import { HomeComponent } from './client/home/home.component';
import { AboutComponent } from './client/about/about.component';
import { ProductsComponent } from './client/products/products.component';
import { ContactUsComponent } from './client/contact-us/contact-us.component';
import { SingleProductComponent } from './client/single-product/single-product.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import {Ng2TelInputModule} from 'ng2-tel-input';

import { ModalModule, InputsModule, TooltipModule, PopoverModule, ButtonsModule} from 'angular-bootstrap-md';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {  WavesModule } from 'angular-bootstrap-md';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { MatCarouselModule } from 'ng-mat-carousel';

import { NgxWhastappButtonModule } from "ngx-whatsapp-button";
import { DashComponent } from './admin/dash/dash.component';
import { OffPlanComponent } from './admin/off-plan/off-plan.component';
import { VilaComponent } from './admin/vila/vila.component';
import { RentComponent } from './admin/rent/rent.component';
import { AppartementComponent } from './admin/appartement/appartement.component';
import { Lunding2Component } from './client/lunding2/lunding2.component';
import { ProducVilaComponent } from './client/produc-vila/produc-vila.component';
import { PrudcApparComponent } from './client/prudc-appar/prudc-appar.component';
import { Lund3Component } from './client/lund3/lund3.component';
import { Lunding4Component } from './client/lunding4/lunding4.component';
import { Form1Component } from './client/form1/form1.component';
import { Form2Component } from './client/form2/form2.component';
import { UserComponent } from './admin/user/user.component';
import { AccordComponent } from './client/accord/accord.component';
import { Map1Component } from './client/map1/map1.component';
import { AgmCoreModule } from '@agm/core';
import { Map4Component } from './client/map4/map4.component';
import { Map3Component } from './admin/map3/map3.component';
import { CarcComponent } from './client/carc/carc.component';
import { ProductOffPlanComponent } from './client/product-off-plan/product-off-plan.component';
import { Home1Component } from './client/home1/home1.component';
import { NgxCarouselModule } from 'ngx-light-carousel';
import { LoginComponent } from './admin/login/login.component';


@NgModule({
declarations: [
    AppComponent,
    AceuilComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ContactUsComponent,
    SingleProductComponent,
    DashComponent,
    OffPlanComponent,
    VilaComponent,
    RentComponent,
    AppartementComponent,
    Lunding2Component,
    ProducVilaComponent,
    PrudcApparComponent,
    Lund3Component,
    Lunding4Component,
    Form1Component,
    Form2Component,
    UserComponent,
    AccordComponent,
    Map1Component,
    Map3Component,
    Map4Component,
    CarcComponent,
    ProductOffPlanComponent,
    Home1Component,
    LoginComponent,
   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    ModalModule, InputsModule, TooltipModule, PopoverModule, ButtonsModule,  MDBBootstrapModule.forRoot(),CarouselModule, WavesModule,
    IvyCarouselModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgxGoogleAnalyticsModule.forRoot('G-QP9B6YSFVC'),
    NgxGoogleAnalyticsRouterModule,
    FormsModule,ReactiveFormsModule ,
    AgmCoreModule.forRoot({ apiKey:""  }),
    NgxWhastappButtonModule,
    Ng2TelInputModule,
    MatCarouselModule.forRoot(),
    NgxCarouselModule 
  ],
  providers: [AsyncPipe,MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
