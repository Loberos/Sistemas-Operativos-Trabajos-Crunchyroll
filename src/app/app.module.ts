import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule, routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './public/pages/footer/footer.component';
import { HeaderComponent } from './public/pages/header/header.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { HomeComponent } from './crunchyroll/pages/home/home.component';
import { InicioComponent } from './public/pages/inicio/inicio.component';
import { NosotrosComponent } from './public/pages/nosotros/nosotros.component';
import { ContactoComponent } from './public/pages/contacto/contacto.component';
import { AnimesComponent } from './crunchyroll/pages/animes/animes.component';
import { SuscripcionesComponent } from './crunchyroll/pages/suscripciones/suscripciones.component';
import { CardSuscripcionesComponent } from './crunchyroll/components/card-suscripciones/card-suscripciones.component';
import { AnimeListComponent } from './crunchyroll/components/anime-list/anime-list.component';
import { DetailsAnimeComponent } from './crunchyroll/components/details-anime/details-anime.component';
import {RouterOutlet} from "@angular/router";
import {ApiAnimesService} from "./crunchyroll/services/api-anime.service";
import {ApiUsuariosService} from "./crunchyroll/services/api-usuarios.service";


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    routingComponent,
    HomeComponent,
    InicioComponent,
    NosotrosComponent,
    ContactoComponent,
    AnimesComponent,
    SuscripcionesComponent,
    CardSuscripcionesComponent,
    AnimeListComponent,
    DetailsAnimeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterOutlet,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [ApiAnimesService, ApiUsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
