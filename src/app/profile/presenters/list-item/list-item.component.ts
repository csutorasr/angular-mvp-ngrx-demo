import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Profile } from '../../models/profile';

@Component({
  selector: 'app-profile-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input() profile: Profile;
  @Output() markAsOld = new EventEmitter<Profile>();
}
