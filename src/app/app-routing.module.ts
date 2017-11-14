import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoupleComponent } from './couple/couple.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PeopleComponent } from './people/people.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'couple', component: CoupleComponent },
  { path: 'ourstory', component: OurStoryComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'location', component: LocationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
