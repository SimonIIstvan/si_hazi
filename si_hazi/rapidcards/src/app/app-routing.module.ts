import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooldalComponent } from './fooldal/fooldal.component';
import { VideokartyakComponent } from './videokartyak/videokartyak.component';

const routes: Routes = [
  { path: '', redirectTo: '/fooldal', pathMatch: 'full' },
  { path: 'fooldal', component: FooldalComponent },
  { path: 'videokartyak', component: VideokartyakComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
