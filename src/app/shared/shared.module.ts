import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingComponent } from './pending/pending.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    PendingComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [
    PendingComponent,
  ]
})
export class SharedModule { }
