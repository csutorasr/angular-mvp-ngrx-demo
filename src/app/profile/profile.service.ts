import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { Profile } from './models/profile';
import { State } from '../reducers';
import { AddAction, MarkAsOldAction, LoadAction } from './actions/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private store: Store<State>) {
    this.store.dispatch(new LoadAction());
  }

  get profiles$() {
    return this.store.pipe(select(s => s.profile.profiles));
  }

  add(profile: Profile) {
    this.store.dispatch(new AddAction(profile));
  }

  markAsOld(name: string) {
    this.store.dispatch(new MarkAsOldAction(name));
  }
}
