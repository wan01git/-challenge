import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { countryResolver } from './country.resolver';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    resolve: { country: countryResolver },
  },
  {
    path: 'details',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
