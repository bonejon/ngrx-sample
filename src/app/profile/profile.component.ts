import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonState } from '../store/common/common.state';
import { Observable } from 'rxjs';
import { PersonTitle } from '../common/models/persontitle';
import * as commonActions from '../store/common/common.actions';
import { personTitlesSelector } from '../store/common/common.selectors';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  public titles$: Observable<Array<PersonTitle>>;

  constructor(private store$: Store<CommonState>) {
    this.titles$ = store$.select(personTitlesSelector);
  }

  public ngOnInit(): void {
    this.store$.dispatch(new commonActions.GetPersonTitlesAction());
  }
}
