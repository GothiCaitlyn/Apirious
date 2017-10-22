import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Game } from '../entities/game';
import { GAMES } from '../data';
import { AppState, ACTIONS } from '../state-management/games.reducer';
import { Store } from '@ngrx/store';
import { Http, Headers, RequestOptions, Response } from '@angular/http'; 

@Injectable()
export class GameService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private _baseUrl = 'http://localhost:3000/Games';
  constructor(
    private store: Store<AppState>,
    private http: Http) { }


  private toGame(value: any) {
    return {
      id: value.id,
      name: value.name,
      developer: value.developer,
      genre: value.genre,
      fee: value.fee,
      picurl: value.picurl,
      trailerurl: value.trailerurl
    }
  }


  public run() {
    this.http.get(`${this._baseUrl}`).subscribe((response) => {
      this.store.dispatch({
        type: ACTIONS.GAMES_LOADED,
        payload: response.json().map(this.toGame)
      });
    });
  }

  getGame(id: number): Promise<Game> {
    const url = `${this._baseUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Game)
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
  create(game: Game): Promise<Game> {
    return this.http
      .post(this._baseUrl, game, { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Game)
      .catch(this.handleError);
  }

}
