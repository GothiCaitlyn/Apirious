import { Component, OnInit } from '@angular/core';
import { Game } from '../entities/game';
import { GameService } from '../services/game.service';
import { Store } from '@ngrx/store';
import { IFilter, ACTIONS as FilterActions } from '../state-management/filter/filter-reducer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import { AppState, ACTIONS } from '../state-management/games.reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  providers: [GameService]
})
export class GamesComponent implements OnInit {

  public games: Observable<Array<Game>>;
  public filter: Observable<IFilter>;

  constructor(
    private store: Store<AppState>,
    private gameService: GameService,
    private router: Router) {
this.runIt()
  }

  applyFilter(games: Array<Game>, filter: IFilter): Array<Game> {
    return games
      .filter(x => !filter.name || x.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1)
      .filter(x => !filter.genre || x.genre.toLowerCase().indexOf(filter.genre.toLowerCase()) != -1)
      .filter(x => !filter.fee || x.fee.toLowerCase().indexOf(filter.fee.toLowerCase()) != -1);
  }
runIt(){

    this.games = Observable.combineLatest(this.store.select('games'), this.store.select('filter'), this.applyFilter);
    this.gameService.run();
}
  ngOnInit() {
  }
  delGame(game: Game): void {
    this.gameService.delete(game.id).then(() => {this.runIt()
      });

    this.router.navigate(['/Games']);
  }
}
