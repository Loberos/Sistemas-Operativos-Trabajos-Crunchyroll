import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./crunchyroll/components/login-form/login.component";
import {RegisterComponent} from "./crunchyroll/components/singup-form/register.component";
import {HomeComponent} from "./crunchyroll/pages/home/home.component";
import {AnimesComponent} from "./crunchyroll/pages/animes/animes.component";
import {SuscripcionesComponent} from "./crunchyroll/pages/suscripciones/suscripciones.component";
import {DetailsAnimeComponent} from "./crunchyroll/components/details-anime/details-anime.component";


const routes: Routes = [
  {path:'', redirectTo:'login-form', pathMatch:'full'},
  {path:'login-form', component:LoginComponent },
  {path:'register', component:RegisterComponent },
  {path:'inicio', component:HomeComponent },
  {path:'animes', component:AnimesComponent },
  {path:'suscripciones', component:SuscripcionesComponent },
  {path:'details', component:DetailsAnimeComponent },
  { path: 'details/:titulo', component: DetailsAnimeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[LoginComponent, RegisterComponent, HomeComponent,AnimesComponent,SuscripcionesComponent,DetailsAnimeComponent ]
