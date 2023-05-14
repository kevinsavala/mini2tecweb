import { Component } from '@angular/core';

/** @title Basic datepicker */
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  tiles: Tile[] = [
    { text: 'One', cols: 4, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 4, rows: 1, color: 'lightgreen' },
    { text: 'Three', cols: 4, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 4, rows: 1, color: '#DDBDF1' },
  ];
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
