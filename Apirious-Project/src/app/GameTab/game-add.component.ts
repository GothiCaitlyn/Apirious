import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { GameService } from '../services/game.service';
import { Game } from '../entities/game';


@Component({
  selector: 'game-add',
  templateUrl: './game-add.component.html',
  styleUrls: ['./game-add.component.css'],
})
export class GameAddComponent {
  public game: Game = {
    id: 0,
    name: '',
    developer: '',
    genre: '',
    fee: '',
    picurl: 'https://thumbsplus.tutsplus.com/uploads/users/34/posts/22720/preview_image/vg.jpg?height=300&width=300',
    trailerurl: ''
  };


  constructor(
    private router: Router,
    private gameService: GameService,
    private route: ActivatedRoute,
    private location: Location,
    public sanitizer: DomSanitizer
  ) { }
  add(name: string, developer: string, genre: string, fee: string, picurl: string, trailerurl: string): void {
    this.game.id = null;
    this.game.name = name.trim();
    this.game.developer = developer.trim();
    this.game.genre = genre.trim();
    this.game.fee = fee.trim();
    this.game.picurl = picurl.trim();
    this.game.trailerurl = trailerurl.trim();
    if (name.trim() == '' && picurl.trim() == '' && developer.trim() == '' && genre.trim() == '' && fee.trim() == '' && trailerurl.trim() == '') {
      console.log('empty');
      return;
    }
    this.gameService.create(this.game).then(game => {
      this.router.navigate(['/Games']);
    });
  }
  goBack(): void {
    this.router.navigate(['/Games']);
  }

}
