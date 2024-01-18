import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  country: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.country = data.countrie;
    console.log('data', this.country);
  }
}
