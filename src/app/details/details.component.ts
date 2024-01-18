import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  country: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DetailsComponent>
  ) {
    this.country = data.countrie;
    console.log('data', this.country);
  }

  descomplica(obj: any) {
    let teste: any = Object.entries(obj);
    let aux = teste[teste.length - 1];
    console.log('funcao', aux[1]);

    return aux[1].common || aux[1].name;
  }

  descomplicaLanguages(obj: any) {
    let teste: any = Object.values(obj);
    console.log('funcao linguagem', teste);

    return teste;
  }
  closeModal() {
    this.dialogRef.close(true);
  }
}
