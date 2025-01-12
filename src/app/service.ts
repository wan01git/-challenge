import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceAPI {
  constructor(private _httpClient: HttpClient) {}
  getAll(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get('https://restcountries.com/v3.1/all').subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
}
