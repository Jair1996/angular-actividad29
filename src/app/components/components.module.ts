import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { ListProductsComponent } from './list-products/list-products.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    ListProductsComponent
  ],
  exports: [
    ToolbarComponent,
    ListProductsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ComponentsModule { }
