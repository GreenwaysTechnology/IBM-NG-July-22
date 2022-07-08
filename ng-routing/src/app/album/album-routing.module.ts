import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlubumDetailsComponent } from './alubum-details-component.component';
import { AlubumComponent } from './alubum.component';

const routes: Routes = [
  {
    path: 'albums', component: AlubumComponent
  },
  { path: 'alumb-details/:id', component: AlubumDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
