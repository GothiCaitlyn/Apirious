import { Action } from '@ngrx/store'
import { Game } from '../entities/game'
export interface AppState {
  games: Array<Game>
}
export interface AppState {
  games: Array<Game>
}

export const ACTIONS = {
  GAMES_LOADED: 'GAMES_LOADED',
  INCOMING_DATA: 'INCOMING_DATA',
  DELETE_GAME: 'DELETE_GAME',
}

export function gamesReducer(
  state: Array<Game> = [],
  action: Action): Array<Game> {

  switch (action.type) {
    case ACTIONS.INCOMING_DATA:
      action.payload.DELETE.forEach((index) => {
        state.splice(state.indexOf(action.payload), 1);
      });
      return Array.prototype.concat(action.payload.ADD, state);
    case ACTIONS.GAMES_LOADED:
      // Return the new state  with the payload as games list
      return Array.prototype.concat(action.payload);
    case ACTIONS.DELETE_GAME:
      // Remove the element from the array
      state.splice(state.indexOf(action.payload), 1);
      // We need to create another reference
      return Array.prototype.concat(state);
    default:
      return state;
  }
}
