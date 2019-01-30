import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { ProfileRoutingModule } from './profile-routing.module';
import { ListContainerComponent } from './containers/list/list.component';
import { ListComponent } from './presenters/list/list.component';
import { ListItemComponent } from './presenters/list-item/list-item.component';

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
  ]
})
export class ProfileModule { }
