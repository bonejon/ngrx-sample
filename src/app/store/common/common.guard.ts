import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { take, switchMap, tap, filter, catchError } from 'rxjs/operators';
import { CommonState } from './common.state';
import { personTitlesSelector } from './common.selectors';
import * as commonActions from './common.actions';

@Injectable()
export class CommonGuard implements CanActivate {
  constructor(private commonStore: Store<CommonState>) {
  }

  public canActivate(): Observable<boolean> {
    return this.getFromStoreOrApi()
    .pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  private getFromStoreOrApi(): Observable<any> {
    return this.commonStore
      .select(personTitlesSelector)
      .pipe(
        tap((data: any) => {
        if (!data.length) {
          this.commonStore.dispatch(new commonActions.GetPersonTitlesAction());
        }
      }),
      filter((data: any) => data.length),
      take(1));
  }
}
