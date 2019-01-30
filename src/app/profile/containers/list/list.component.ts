import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { Profile } from '../../models/profile';
import { ProfileService } from '../../profile.service';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListContainerComponent implements OnInit {
  profiles$: Observable<Profile[]>;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profiles$ = this.profileService.profiles$;
  }

  markAsOld(profile: Profile) {
    profile.new = false;
    this.profileService.logData();
  }

}
