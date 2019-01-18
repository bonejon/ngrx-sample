import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatFormFieldModule,
  MatTableModule,
  MatButtonModule,
  MatBottomSheetModule,
  MatIconModule
} from '@angular/material';

import { CartStoreModule } from '../store/cart/cart-store.module';
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
    CartStoreModule,
    MatInputModule, MatFormFieldModule, MatTableModule,
    MatButtonModule, MatBottomSheetModule, MatIconModule
  ]
})
export class CartModule {
}
