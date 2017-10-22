import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

// Keep the Input import for now, you'll remove it later:
import { Component, Input} from '@angular/core';
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
export class GameAddComponent  {
  @Input() game: Game;

  constructor(
    private router: Router,
    private gameService: GameService,
    private route: ActivatedRoute,
    private location: Location,
    public sanitizer: DomSanitizer
  ) { }
  add(name: string): void {
    /*this.game = new Game(name.trim(), developer.trim(), genre.trim(), fee.trim(), picurl.trim(), trailerurl.trim());
    if (!name) {
      return;
    }
    this.gameService.create(this.game);
  });*/
}
goBack(): void {
  this.router.navigate(['/Games']);
}
}
