import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatFormFieldModule,
  MatTableModule,
  MatButtonModule,
  MatBottomSheetModule,
  MatSnackBarModule,
  MatIconModule
} from '@angular/material';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartModule } from '../cart/cart.module';

@NgModule({
  declarations: [
    ProductListComponent
  ],
  exports: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CartModule,
    ProductsRoutingModule,
    MatInputModule, MatFormFieldModule, MatTableModule,
    MatButtonModule, MatBottomSheetModule, MatSnackBarModule,
    MatIconModule
  ]
})
export class ProductsModule {
}
