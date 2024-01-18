import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServiceAPI } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'projeto';
  searchInputControl: FormControl;
  data: any;

  constructor(private _api: ServiceAPI) {
    this.searchInputControl = new FormControl();
    this.data = this._api.getAll();
    console.log('aaaaa', this.data.__zone_symbol__value);
  }

  filter(valor: any) {
    return valor;
  }
}
