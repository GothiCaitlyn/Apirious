import { Component, OnInit } from '@angular/core';
import { Game } from '../entities/game';
import { GameService } from '../services/game.service';
import { Store } from '@ngrx/store';
import { IFilter, ACTIONS as FilterActions } from '../state-management/filter/filter-reducer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import { AppState, ACTIONS } from '../state-management/games.reducer';


@Component({
  selector: 'app-user',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  providers: [GameService]
})
export class GamesComponent implements OnInit {

  public games: Observable<Array<Game>>;
  public filter: Observable<IFilter>;

  constructor(private store: Store<AppState>, private service: GameService) {
    //this.freelancers = store.select('freelancers');
    this.games = Observable.combineLatest(store.select('games'), store.select('filter'), this.applyFilter);
    this.service.run();
  }

  applyFilter(games: Array<Game>, filter: IFilter): Array<Game> {
    return games
      .filter(x => !filter.name || x.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1)
      .filter(x => !filter.genre || x.genre.toLowerCase().indexOf(filter.genre.toLowerCase()) != -1)
      .filter(x => !filter.fee || x.fee.toLowerCase().indexOf(filter.fee.toLowerCase()) != -1);
  }

  ngOnInit() {
  }



/*
    games: Game[];
    allGames:Game[];
    selectedGame: Game;
    constructor(private gameService: GameService) { }

    getGames(): void {
      this.gameService.getGames().then(games => this.games = games);
    }
    ngOnInit(): void {
      this.getGames();
    }

    onSelectGame(game: Game): void {
      this.selectedGame = game;
    }
  */
}
