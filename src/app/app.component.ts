import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from './details/details.component';
import { ServiceAPI } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'projeto';
  searchInputControl: FormControl;
  selected = new FormControl();
  data: any;
  datafiltered: any;

  constructor(private _api: ServiceAPI, private _dialog: MatDialog) {
    this.searchInputControl = new FormControl();
    this.data = this._api.getAll();
    this.datafiltered = this.data.__zone_symbol__value;
    console.log(this.datafiltered);
  }

  filter(valor: any) {
    this.datafiltered = [];
    this.data.__zone_symbol__value.filter((option: any) => {
      if (option.name.common.toUpperCase().includes(valor.toUpperCase())) {
        this.datafiltered.push(option);
      }
    });
  }

  openDetails(countrie: any) {
    const dialogRef = this._dialog.open(DetailsComponent, {
      width: '100%',
      minWidth: '100%',
      minHeight: '100vh',
      maxHeight: '100vh',
      data: {
        countrie,
      },
    });
  }
}
