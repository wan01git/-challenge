import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  country: any;
  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.country = nav?.extras.state?.['info'];
  }

  ngOnInit() {
    if (!this.country) {
      this.country = null;
    }
  }
  descomplica(obj: any) {
    let teste: any = Object.entries(obj);
    let aux = teste[teste.length - 1];

    return aux[1].common || aux[1].name;
  }

  descomplicaLanguages(obj: any) {
    let teste: any = Object.values(obj);

    return teste;
  }
}
