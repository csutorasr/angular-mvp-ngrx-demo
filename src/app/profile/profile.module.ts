import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';

import { ProfileRoutingModule } from './profile-routing.module';
import { reducers } from './reducers';
import { ListContainerComponent } from './containers/list/list.component';
import { ListComponent } from './presenters/list/list.component';
import { ListItemComponent } from './presenters/list-item/list-item.component';
import { ProfileEffects } from './profile.effects';

@NgModule({
  declarations: [
    ListContainerComponent,
    ListComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    ProfileRoutingModule,
    StoreModule.forFeature('profile', reducers),
    EffectsModule.forFeature([ProfileEffects]),
    SharedModule,
  ]
})
export class ProfileModule { }
