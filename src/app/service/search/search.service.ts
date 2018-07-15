import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private _http: HttpClient) { }

  getCategories(): Observable<any> {
    return this._http.get(`/api/v1/category/list`)
  }
}

export class Categories {
  constructor(
    public categoryId: number,
    public name: string
  ) {}
}
