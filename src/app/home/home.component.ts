import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAPI } from '../service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  searchInputControl: FormControl;
  title = 'projeto';
  selected = new FormControl();
  data: any;
  datafiltered: any;
  regionFilter: 'aaa' | undefined;

  constructor(
    private _api: ServiceAPI,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {
    this.searchInputControl = new FormControl();
  }

  ngOnInit() {
    this.datafiltered = this.activeRouter.snapshot.data['country'];
  }

  filter(valor: any) {
    console.log('filtro', valor);
    const filter = valor.target.value;
    this.datafiltered = this.data.__zone_symbol__value.filter((option: any) =>
      option.name.common.toUpperCase().includes(filter.toUpperCase())
    );
  }

  filterRegion(a: any) {
    console.log('entrou', a);
    this.datafiltered = this.data.__zone_symbol__value.filter((option: any) =>
      option.region.toUpperCase().includes(a.toUpperCase())
    );
  }

  openDetails(obj: any) {
    this.router.navigateByUrl('/details', {
      state: { info: obj },
    });
  }
}
