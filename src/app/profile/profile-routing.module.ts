import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { CommonGuard } from '../store/common/common.guard';

const routes: Routes = [
  { path: '', component: ProfileComponent, canActivate: [ CommonGuard ] }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProfileRoutingModule {
}
