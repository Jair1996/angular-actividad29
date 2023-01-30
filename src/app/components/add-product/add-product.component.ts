import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';
import Swal from 'sweetalert2';
import { AddProductDialogComponent } from '../add-product-dialog/add-product-dialog.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  constructor(
    public dialog: MatDialog,
    private productService: ProductService
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddProductDialogComponent, {
      data: { code: '', description: '', price: 0 },
    });

    dialogRef.afterClosed().subscribe((product: Product) => {
      if (product) {
        this.productService
          .addProduct(product)
          .then((_) => {
            Swal.fire({
              icon: 'success',
              title: 'Nice!!!',
              text: 'Producto agregado correctamente',
            });
          })
          .catch((_) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops!!!',
              text: 'Ha ocurrido un error intentelo nuevamente',
            });
          });
      }
    });
  }
}
