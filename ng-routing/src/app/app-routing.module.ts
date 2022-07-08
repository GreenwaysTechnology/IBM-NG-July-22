import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound.component';

//Router Configuration : Menu Configuration
const routes: Routes = [
  //index path Without redictions
  // { path: '', component: HomeComponent },
  //index path with redirection
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //Named Paths
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },

  //connect sub module routing module
  //http://localhost:4200/myablums/album
  //http://localhost:4200/myablums/alumb-details/:id
  { path: 'myablums', loadChildren: () => import("./album/album-routing.module").then(m => m.AlbumRoutingModule) },
  //page Not Found
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
