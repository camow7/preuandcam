import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CoupleComponent } from './couple/couple.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PeopleComponent } from './people/people.component';
import { LocationComponent } from './location/location.component';
export const firebaseConfig = environment.firebaseConfig;
//Firebase end

//MDB
//import { MDBBootstrapModules } from 'ng-mdb-pro';
//import { MDBSpinningPreloader } from 'ng-mdb-pro';
//import { NO_ERRORS_SCHEMA } from '@angular/core';
//MDB End


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CoupleComponent,
    OurStoryComponent,
    GalleryComponent,
    PeopleComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    //MDBBootstrapModules.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [  ]
})
export class AppModule { }
