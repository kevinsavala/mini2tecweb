import { Component } from '@angular/core';

/** @title Basic datepicker */
@Component({
  selector: 'reservar-component',
  templateUrl: './reservar.component.html',
})
export class ReservarComponent {
  minDate: Date;
  constructor() {
    this.minDate = new Date();
  }
}