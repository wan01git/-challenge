import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  country: FormControl;
  region: FormControl;
  title = 'projeto';
  selected = new FormControl();
  data: any;
  datafiltered: any;

  constructor(private router: Router, private activeRouter: ActivatedRoute) {
    this.country = new FormControl('');
    this.region = new FormControl('');
  }

  ngOnInit() {
    this.data = this.activeRouter.snapshot.data['country'];
    this.datafiltered = this.data;
  }

  filter(country?: any, region?: any) {
    console.log('entrou', this.country.value, this.region.value);

    const filterCountry = (
      country?.target.value || this.country.value
    ).toUpperCase();
    const filterRegion = (region || this.region.value).toUpperCase();
    if (filterCountry != '' && filterRegion != '') {
      this.datafiltered = this.data.filter(
        (option: any) =>
          option.region.toUpperCase().includes(filterRegion) &&
          option.name.common.toUpperCase().includes(filterCountry)
      );
    }
    if (filterCountry == '' && filterRegion != '') {
      this.datafiltered = this.data.filter((option: any) =>
        option.region.toUpperCase().includes(filterRegion)
      );
    }
    if (filterCountry != '' && filterRegion == '') {
      this.datafiltered = this.data.filter((option: any) =>
        option.name.common.toUpperCase().includes(filterCountry)
      );
    }
    if (filterCountry == '' && filterRegion == '') {
      this.datafiltered = this.data;
    }
  }

  openDetails(obj: any) {
    this.router.navigateByUrl('/details', {
      state: { info: obj },
    });
  }
}
