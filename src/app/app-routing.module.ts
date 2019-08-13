import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForumComponent } from './forum/forum.component';
import { HomeComponent } from './home/home.component';
import { TalkComponent } from './talk/talk.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DisplayComponent } from './display/display.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"talk", component: TalkComponent},
  {path:"home", component: HomeComponent},
  {path:"forum", component:  ForumComponent},
  {path:"about", component:  AboutComponent},
  {path:"contact", component:  ContactComponent},
  {path:"display", component:  DisplayComponent},
  {path:"update", component:  UpdateComponent},
  { path: '', pathMatch: 'full', redirectTo: '/display' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
