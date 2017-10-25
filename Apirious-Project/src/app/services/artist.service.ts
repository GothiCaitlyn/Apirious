import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Artist } from '../entities/artist';
import { ARTISTS } from '../data';

@Injectable()
export class ArtistService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private _baseUrl = 'http://localhost:3000/Artists';
  constructor(private http: Http) { }

  getArtists(): Promise<Artist[]> {
    return this.http.get(this._baseUrl)
      .toPromise()
      .then(response => response.json() as Artist[])
      .catch(this.handleError);
  }
  getArtist(id: number): Promise<Artist> {
    const url = `${this._baseUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Artist)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {

    return this.http.delete(`${this._baseUrl}/${id}`, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
