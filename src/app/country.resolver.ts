import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ServiceAPI } from './service';

export const countryResolver: ResolveFn<any> = (_route, _state) => {
  return inject(ServiceAPI).getAll();
};
