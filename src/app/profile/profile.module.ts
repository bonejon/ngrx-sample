import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatFormFieldModule,
  MatTableModule,
  MatButtonModule,
  MatBottomSheetModule,
  MatIconModule,
  MatSelectModule
} from '@angular/material';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  exports: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProfileRoutingModule,
    MatInputModule, MatFormFieldModule, MatTableModule, MatSelectModule,
    MatButtonModule, MatBottomSheetModule, MatIconModule
  ]
})
export class ProfileModule {
}
