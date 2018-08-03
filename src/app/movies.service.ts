import { Injectable } from '@angular/core';
import { Http } from '../../node_modules/@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: Http) { }
}
