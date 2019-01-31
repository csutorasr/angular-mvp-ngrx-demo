import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { State } from '../../reducers';
import { MarkAsOldAction, LoadAction } from '../../actions/profile';
import { Profile } from '../../models/profile';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListContainerComponent implements OnInit {
  profiles$: Observable<Profile[]>;
  newCount$: Observable<number>;
  pending$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.profiles$ = this.store.pipe(select(s => s.profile.profile.profiles));
    this.pending$ = this.store.pipe(select(s => s.profile.profile.pending));
    this.error$ = this.store.pipe(select(s => s.profile.profile.error));
    this.load();
    this.newCount$ = this.profiles$.pipe(
      map(x => x.filter(profile => profile.new).length)
    );
  }

  markAsOld(profile: Profile) {
    this.store.dispatch(new MarkAsOldAction(profile.name));
  }

  load() {
    this.store.dispatch(new LoadAction());
  }

}
