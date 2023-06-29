import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, inject} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ProductosService } from 'src/app/services/place.service';



@Component({
  selector: 'app-MenuPrincipal',
  templateUrl: './MenuP.component.html',
  styleUrls: ['./MenuP.component.css'],
  
})

export class MenuPComponent implements OnInit {
  


  mostrarBotonesDesayuno = false;
  mostrarBotonesAlmuerzo = false;
  mostrarBotonessandwich = false;
  mostrarBotonesCafe = false;
  mostrarBotonesMalteada = false;
  mostrarBotonesBebida = false;
  mostrarBotonesHamburguesa = false;
  mostrarBotonesAcompanante = false;
  mostrarBotonesCerveza = false;
  listaProductos: any[] = [];
  

  // productos = [
  //   {nombre: 'Seleccione su producto', cantidad: null, precio: null },
  //   { nombre: 'Café americano', cantidad: 1, precio: 4 },
  //   { nombre: 'Sandwich Croque-mosieur', cantidad: 1, precio: 7 },
  //   { nombre: 'Sandwich Cheesesteak', cantidad: 1, precio: 8 },
  //   { nombre: 'Sandwich Club Sandwich', cantidad: 1, precio: 6 },
  //   { nombre: 'Sandwich Lobster', cantidad: 1, precio: 8 },
  //   { nombre: 'Sandwich Mollete', cantidad: 1, precio: 6 },
  //   { nombre: 'Café con leche', cantidad: 1, precio: 3 },
  //   { nombre: 'Café bombón', cantidad: 1, precio: 5 },
  //   { nombre: 'Mocca', cantidad: 1, precio: 3 },
  //   { nombre: 'Capuchino', cantidad: 1, precio: 3 },
  //   { nombre: 'Americano', cantidad: 1, precio: 3 },
  //   { nombre: 'Malteada de cafe y oreo', cantidad: 1, precio: 6 },
  //   { nombre: 'Malteada de vainilla', cantidad: 1, precio: 4 },
  //   { nombre: 'Malteada de chocolate', cantidad: 1, precio: 4 },
  //   { nombre: 'Malteada de fresa', cantidad: 1, precio: 4 },
  //   { nombre: 'Malteada de fresa y chocolate', cantidad: 1, precio: 6 },
  //   { nombre: 'Nestea', cantidad: 1, precio: 3 },
  //   { nombre: 'Refresco', cantidad: 1, precio: 2 },
  //   { nombre: 'Jugo de naranja', cantidad: 1, precio: 4 },
  //   { nombre: 'Juge de mora', cantidad: 1, precio: 4 },
  //   { nombre: 'Limonada', cantidad: 1, precio: 3 },
  //   { nombre: 'Hamburguesa simple', cantidad: 1, precio: 10 },
  //   { nombre: 'Hamburguesa doble', cantidad: 1, precio: 15},
  //   { nombre: 'Hamburguesa pollo crispy', cantidad: 1, precio: 15},
  //   { nombre: 'Hamburguesa vegana', cantidad: 1, precio: 12},
  //   { nombre: 'Hamburguesa BBQ', cantidad: 1, precio: 15},
  //   { nombre: 'Papas fritas', cantidad: 1, precio: 5},
  //   { nombre: 'Aro de cebolla', cantidad: 1, precio: 5},
  //   { nombre: 'Tequeños de queso', cantidad: 1, precio: 5},
  //   { nombre: 'Dedos de queso', cantidad: 1, precio: 5},
  //   { nombre: 'Palitos de mozzarela', cantidad: 1, precio: 5},
  //   { nombre: 'Cerveza pilsen', cantidad: 1, precio: 3},
  //   { nombre: 'Cerveza lager', cantidad: 1, precio: 3},
  //   { nombre: 'Cerveza Zulia', cantidad: 1, precio: 4},
  //   { nombre: 'Tobo de Cerveza', cantidad: 1, precio: 5},
  //   { nombre: 'Cerveza alemana', cantidad: 1, precio: 7},
  // ];

  constructor(
    private productosService: ProductosService,
    private userService: UserService,
    private router: Router
  ) { }


  productoSeleccionado: any = null;

  async mostrarProducto(nombre: string,) {
    const producto = await this.productosService.getProductobyId(nombre);
    if (producto) {
      console.log(producto);
    } else {
      console.log('Producto no encontrado');
    }
  }
  
  
  
  calcularTotal() {
    let total = 0;
    for (let producto of this.listaProductos) { 
      total += producto.precio;
    }
    return total;
  }
  
  ngOnInit(): void {
  }

  onClick() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }

  mostrarDesayuno() {
    this.mostrarBotonesDesayuno = true;
    this.mostrarBotonesAlmuerzo = false;
  }

  mostrarAlmuerzo() {
    this.mostrarBotonesDesayuno = false;
    this.mostrarBotonesAlmuerzo = true;
  }
    
  /* Desayuno */
    mostrarBotonesP() {
      this.mostrarBotonessandwich = true;
      this.mostrarBotonesCafe = false;
      this.mostrarBotonesMalteada = false;
      this.mostrarBotonesBebida = false;
      this.mostrarBotonesCerveza = false;
      this.mostrarBotonesHamburguesa = false;
      this.mostrarBotonesAcompanante = false;

    }
    mostrarBotonesC() {
      this.mostrarBotonesCafe = true;
      this.mostrarBotonesMalteada = false;
      this.mostrarBotonesBebida = false;
      this.mostrarBotonessandwich = false;
      this.mostrarBotonesCerveza = false;
      this.mostrarBotonesHamburguesa = false;
      this.mostrarBotonesAcompanante = false;
    }
  
    mostrarBotonesM() {
      this.mostrarBotonesCafe = false;
      this.mostrarBotonesMalteada = true;
      this.mostrarBotonesBebida = false;
      this.mostrarBotonessandwich = false;
      this.mostrarBotonesCerveza = false;
      this.mostrarBotonesHamburguesa = false;
      this.mostrarBotonesAcompanante = false;
    }
  
    mostrarBotonesB() {
      this.mostrarBotonesCafe = false;
      this.mostrarBotonesMalteada = false;
      this.mostrarBotonesBebida = true;
      this.mostrarBotonessandwich = false;
      this.mostrarBotonesCerveza = false;
      this.mostrarBotonesHamburguesa = false;
      this.mostrarBotonesAcompanante = false;
    }

    /* Almuerzo  */
    mostrarBotonesH(){
      this.mostrarBotonesHamburguesa = true;
      this.mostrarBotonesAcompanante = false;
      this.mostrarBotonesCerveza = false;
      this.mostrarBotonesBebida = false;
      this.mostrarBotonesMalteada = false
      this.mostrarBotonesCafe = false
      this.mostrarBotonessandwich = false
    }

    mostrarBotonesA(){
      this.mostrarBotonesHamburguesa = false;
      this.mostrarBotonesAcompanante = true;
      this.mostrarBotonesCerveza = false;
      this.mostrarBotonesBebida = false;
      this.mostrarBotonesMalteada = false;
      this.mostrarBotonesCafe = false
      this.mostrarBotonessandwich = false
    }
    mostrarBotonesCe(){
      this.mostrarBotonesHamburguesa = false;
      this.mostrarBotonesAcompanante = false;
      this.mostrarBotonesCerveza = true;
      this.mostrarBotonesBebida = false;
      this.mostrarBotonesMalteada = false;
      this.mostrarBotonesCafe = false
      this.mostrarBotonessandwich = false
    }
  }