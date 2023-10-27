import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiAnimesService } from "../../services/api-anime.service";

@Component({
  selector: 'app-details-anime',
  templateUrl: './details-anime.component.html',
  styleUrls: ['./details-anime.component.css']
})
export class DetailsAnimeComponent implements OnInit {
  animeDetails: any;

  constructor(
    private route: ActivatedRoute,
    private apiAnimesService: ApiAnimesService
  ) {}

  ngOnInit(): void {
    const animeId = this.route.snapshot.paramMap.get('titulo');
    this.apiAnimesService.getAnimeDetails(animeId).subscribe(
      (data: any) => {
        this.animeDetails = data;
      },
      (error: any) => {
        console.error('Error al obtener los detalles del anime:', error);
      }
    );
  }
}
