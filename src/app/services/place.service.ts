import { Injectable } from '@angular/core';
import { Firestore, collection, doc, getDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import productos from '../interfaces/place.interface';
import Producto from '../interfaces/place.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private firestore: Firestore) { }

  async getProductobyId(nombre: string): Promise<Producto | undefined> {
    const productoDocRef = doc(this.firestore, 'productos', nombre);
    const productoSnap = await getDoc(productoDocRef);
    
    if (productoSnap.exists()) {
      const productoData = productoSnap.data();
      const producto: productos = {
        cantidad: 0, 
        nombre: 'Nombre del producto',
        precio: 0
      };
      
      return producto;
    }
    
    return undefined;
  }
}
  
