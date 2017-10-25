import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';


import { HomeComponent } from './home/home.component';
import { GamesComponent } from './GameTab/games.component';
import { ArtistsComponent } from './musicTab/artists.component';
import { NotificationsComponent } from './notifications/notifications.component';


import { ArtistDetailComponent } from './musicTab/artist-detail.component';
import { GameDetailComponent } from './GameTab/game-detail.component';
import { GameAddComponent } from './GameTab/game-add.component';

import { ArtistService } from './services/artist.service';
import { GameService } from './services/game.service';

import { Store, StoreModule } from '@ngrx/store';
import { gamesReducer } from './state-management/games.reducer';
import { filterReducer } from './state-management/filter/filter-reducer';
import { FilterComponent } from './state-management/filter/filter-component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistsComponent,
    NotificationsComponent,
    ArtistDetailComponent,
    GameDetailComponent,
    GameAddComponent,
    GamesComponent,
    ArtistsComponent,
    FilterComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.provideStore({ games: gamesReducer, filter: filterReducer })
  ],
  providers: [ArtistService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
