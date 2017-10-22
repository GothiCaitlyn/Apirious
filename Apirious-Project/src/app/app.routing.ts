import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GamesComponent } from './GameTab/games.component';
import { GameAddComponent } from './GameTab/game-add.component';
import { GameDetailComponent } from './GameTab/game-detail.component';
import { ArtistsComponent } from './musicTab/artists.component';
import { NotificationsComponent } from './notifications/notifications.component';

import { ArtistDetailComponent } from './musicTab/artist-detail.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Games', component: GamesComponent },
  { path: 'Games/GameDetails/:id', component: GameDetailComponent },
  { path: 'Music', component: ArtistsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'Music/ArtistDetails/:id', component: ArtistDetailComponent },
  { path: 'Games/AddGame',  component: GameAddComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
