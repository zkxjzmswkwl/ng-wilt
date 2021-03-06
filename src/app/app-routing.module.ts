import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
  LoginComponent,
  RegisterComponent,
  HomeComponent, 
  ProfileComponent, 
  ArtistProfileComponent
} from './components';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile/:username', component: ProfileComponent},
  { path: 'artist/:name', component: ArtistProfileComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
