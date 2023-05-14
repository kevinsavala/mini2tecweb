import { Component, OnInit } from '@angular/core';
import { CarteleraService } from './cartelera.service';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css'],
  styles: [
    `
  .card {
    margin: 10px;
    width: 300px;
  }
`,
  ],
})
export class CarteleraComponent implements OnInit {
  peliculas: any[];
  constructor(private peliculaService: CarteleraService) {}

  ngOnInit() {
    this.peliculas = this.peliculaService.getPeliculas();
  }

  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'red' },
    { text: 'Two', cols: 1, rows: 1, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
}
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
