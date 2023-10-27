import { Component, OnInit } from '@angular/core';
import {ApiAnimesService} from "../../services/api-anime.service";

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {
  animes: any[] = [];

  constructor(private apiAnimesService: ApiAnimesService) {}

  ngOnInit(): void {
    this.apiAnimesService.getAnimes().subscribe(
      (data: any[]) => {
        this.animes = data;
      },
      (error: any) => {
        console.error('Error al obtener la lista de animes:', error);
      }
    );
  }
}
