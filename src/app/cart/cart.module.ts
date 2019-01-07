import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatFormFieldModule,
  MatTableModule,
  MatButtonModule,
  MatBottomSheetModule,
  MatIconModule
} from '@angular/material';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartPopupComponent } from './cart-popup.component';

@NgModule({
  declarations: [
    CartPopupComponent
  ],
  entryComponents: [
    CartPopupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule, MatFormFieldModule, MatTableModule,
    MatButtonModule, MatBottomSheetModule, MatIconModule
  ]
})
export class CartModule {
}
