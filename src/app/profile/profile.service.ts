import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Profile } from './models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private data = Array.from({ length: 5 }, (_, i): Profile =>
    ({
      name: `Test${i}`,
      new: i % 2 === 0,
    })
  );

  load() {
    if (Math.floor(Math.random() * 10) === 0) {
      return throwError('hiba');
    }
    return of(this.data).pipe(delay(1500));
  }

  markAsOld(name: string) {
    if (Math.floor(Math.random() * 10) === 0) {
      return throwError('hiba');
    }
    this.data = this.data.map(x => {
      if (x.name === name) {
        return {
          ...x,
          new: false,
        };
      }
      return x;
    });
    return of(true).pipe(delay(500));
  }
}
