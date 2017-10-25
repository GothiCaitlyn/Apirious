import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl } from '@angular/forms';
import * as Rx from 'rxjs/Rx';

import { IFilter, ACTIONS as FilterACTIONS } from './filter-reducer';

@Component({
  selector: 'app-filter',
  templateUrl: 'filter-component.html',
  // styleUrls: ['./filter-component.css']
})
export class FilterComponent implements OnInit {
  public name = new FormControl();
  public genre = new FormControl();
  public fee = new FormControl();
  constructor(private store: Store<any>) {
    store.select('filter').subscribe((filter: IFilter) => {
      this.name.setValue(filter.name);
      this.genre.setValue(filter.genre);
      this.fee.setValue(filter.fee);
    });
    Rx.Observable.merge(this.name.valueChanges, this.genre.valueChanges, this.fee.valueChanges)
      .debounceTime(1000).subscribe(() => this.filter());

  }

  ngOnInit() {
  }

  filter() {
    this.store.dispatch({
      type: FilterACTIONS.UPDATE_FILTER,
      payload: {
        name: this.name.value,
        genre: this.genre.value,
        fee: this.fee.value,
      }
    });
  }

  clearFilter() {
    this.store.dispatch({
      type: FilterACTIONS.CLEAR_FILTER,
    });
  }

}
