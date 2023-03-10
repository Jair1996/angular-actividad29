import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { ListProductsComponent } from './list-products/list-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    ListProductsComponent,
    AddProductComponent,
    AddProductDialogComponent,
    ConfirmDialogComponent,
  ],
  exports: [
    ToolbarComponent,
    ListProductsComponent,
    AddProductComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ]
})
export class ComponentsModule { }
