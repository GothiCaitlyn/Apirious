import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';

// Keep the Input import for now, you'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { GameService } from '../services/game.service';
import { Game } from '../entities/game';
import { AppState, ACTIONS } from '../state-management/games.reducer';


@Component({
  selector: 'game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css'],
})
export class GameDetailComponent implements OnInit {
  @Input() game: Game;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private gameService: GameService,
    private route: ActivatedRoute,
    private location: Location,
    public sanitizer: DomSanitizer
  ) { }


  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.gameService.getGame(+params.get('id')))
      .subscribe(game => this.game = game);
  }
  delGame() {
    this.store.dispatch({
      type: ACTIONS.DELETE_GAME,
      payload: this.game,
    });
    this.router.navigate(['/']);
  }
  /*
  delGame(): void {
     this.gameService.delete(this.game.id);
       this.router.navigate(['/']);
  }*/
  goBack(): void {
    this.router.navigate(['/Games']);
  }
}
