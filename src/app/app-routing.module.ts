import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ActorsComponent } from './components/actors/actors.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [

  {path:'' , redirectTo:'login',pathMatch:'full'},
  {path:'home' ,canActivate:[AuthGuard], component:HomeComponent},
  {path:'movies',canActivate:[AuthGuard] , component:MoviesComponent},
  {path:'tv',canActivate:[AuthGuard] , component:TvShowsComponent},
  {path:'actors',canActivate:[AuthGuard] , component:ActorsComponent},
  {path:'details/:id/:mediatype',canActivate:[AuthGuard],component:DetailsComponent},
  {path:'register' , component:RegisterComponent},
  {path:'login' , component:LoginComponent},
  {path:'**' , component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
