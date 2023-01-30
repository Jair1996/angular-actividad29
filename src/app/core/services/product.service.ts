import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  Firestore,
  collection,
  collectionData,
  doc,
  deleteDoc,
  addDoc,
} from '@angular/fire/firestore';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private firestore: Firestore) {}

  getProducts(): Observable<Product[]> {
    const productRef = collection(this.firestore, 'products');
    return collectionData(productRef, { idField: 'id' }) as Observable<
      Product[]
    >;
  }

  deleteProduct(product: Product) {
    const productRef = doc(this.firestore, `products/${product.id}`);
    return deleteDoc(productRef);
  }

  addProduct(product: Product) {
    const productRef = collection(this.firestore, 'products');
    return addDoc(productRef, product);
  }
}
