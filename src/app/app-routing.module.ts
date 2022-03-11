import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { MusicComponent } from './music/music.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShppingComponent } from './shpping/shpping.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"movie", component:MovieComponent},
  {path:"music", component:MusicComponent},
  {path:"shop", component:ShppingComponent},
  {path:"register", component:RegistrationComponent},
  {path:"login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
