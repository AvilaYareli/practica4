import { Injectable } from '@angular/core';

export interface Product{
  id: number;
  nombre:string;
  descripcion: string;
  descripcionCompleta:string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})

export class Products {
  
  private products:Product[] = [
    {
      id: 1,
      nombre: 'Estilo moderno',
      descripcion : 'Ideal para ciudad',
      descripcionCompleta:'Fragancia cálida y acogedora, perfecta para ambientes íntimos. Suaviza el ambiente con un toque dulce y reconfortante.Ideal para crear una sensación hogareña y apacible.',
      precio: 500,
      imagen: '/img/pro1.jpg'
    },
    {
      id: 2,
      nombre: 'Velas marmoleadas',
      descripcion: 'Potente y elegante',
      descripcionCompleta:'Mezcla de limón, naranja y mandarina para revitalizar espacios. Despierta los sentidos y mejora el estado de ánimo.Excelente para usar por las mañanas o durante el trabajo.',
      precio: 900 ,
      imagen: '/img/pro2.jpg'
    },
    {
      id: 3,
      nombre: 'Minimalistas',
      descripcion: 'Moderna y económica',
      descripcionCompleta:'Aroma especiado que aporta calidez y sensación hogareña.Evoca recuerdos de hogar y épocas festivas.Muy usada para decorar y aromatizar en otoño o invierno.',
      precio: 900,
      imagen: '/img/pro3.jpg'
    },
   {
      id: 4,
      nombre: 'Estetico',
      descripcion: 'Moderna y económica',
      descripcionCompleta:'Aroma calmante ideal para dormir mejor y reducir el estrés.<br> Ayuda a aliviar la ansiedad y crea un ambiente sereno y pacífico.<br>Perfecta para usar durante un baño relajante o al final del día.',
      precio: 300,
      imagen: '/img/pro4.jpg'
   },
   
  ]
  constructor(){}
  getProducts():Product[]{
    return this.products;
  }
}
