import { Injectable } from '@angular/core';
import { Profile } from './models/profile';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private data: Profile[];
  private subject: BehaviorSubject<Profile[]>;

  constructor() {
    this.data = Array.from({ length: 5 }, (_, i): Profile =>
      ({
        name: `Test${i}`,
        new: i % 2 === 0,
      })
    );
    this.subject = new BehaviorSubject(this.data);
  }

  get profiles$() {
    return this.subject.asObservable();
  }

  add(profile: Profile) {
    this.data.push(profile);
    this.subject.next(this.data);
  }

  logData() {
    console.log(this.data);
  }
}
