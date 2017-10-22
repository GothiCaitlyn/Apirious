import { Action } from '@ngrx/store';

export interface IFilter {
  name: string,
  genre: string,
  fee: string
}

export const ACTIONS = {
  UPDATE_FILTER: 'UPDATE_FILTER',
  CLEAR_FILTER: 'CLEAR_FILTER',
}

const intialState = { name: '', genre: '', fee: '' };

export function filterReducer(
  state: IFilter = intialState,
  action: Action): IFilter {

  switch (action.type) {
    case ACTIONS.UPDATE_FILTER: 
      return Object.assign({}, action.payload);
    case ACTIONS.CLEAR_FILTER:
      return Object.assign({}, intialState);
    default:
      return state;
  }
}
