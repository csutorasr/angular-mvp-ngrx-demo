import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent {
  @Input() pending: boolean;
  @Input() error: string;
  @Output() reload = new EventEmitter();
}
