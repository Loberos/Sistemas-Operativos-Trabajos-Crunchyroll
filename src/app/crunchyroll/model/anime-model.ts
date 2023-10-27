export interface Anime {
  id: string;
  titulo: string;
  url_imagen: string;
  sinopsis: string;
  tipo_ids: number[];
  fecha_publicacion: Date;
  estado: string;
  visitas: number;
  cantidad_episodios: number;
}
