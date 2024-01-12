import { Component, OnInit } from '@angular/core';
import { Color, Hero } from 'src/app/interfaces/hero.interface';
import { Product } from 'src/app/interfaces/product.type';

@Component({
  selector: 'products-pages-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  constructor() { }

  ngOnInit() {
  }

  public nameLower: string = 'francisco javier';
  public nameUpper: string = 'FRANCISCO JAVIER';
  public fullName: string = 'FrAnCiScO JaViEr';
  public example: string ='example';
  public customDate: Date = new Date();

  public isUpperCase: boolean = false;
  public orderBy: keyof Hero | undefined | '' = '';


  public products: Product[] = [
    {
      code: "f230fh0g3",
      name:"Bamboo Watch",
      category:"Accessories",
      quantity:24
    },{
      code: "nvklal433",
      name:"Black Watch",
      category:"Accessories",
      quantity:61
    },{
      code: "zz21cz3c1",
      name:"Blue Band",
      category:"Fitness",
      quantity:2
    },{
      code: "244wgerg2",
      name:"Blue T-Shirt",
      category:"Clothing",
      quantity:25
    },
    {
      code: "h456wer53",
      name:"Bracelet",
      category:"Accessories",
      quantity:73
    }

  ];

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Green Lantern',
      canFly: true,
      color: Color.green
    },
  ]





  toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase;
  }


  changeOrder(orderBy: keyof Hero):void{

    this.orderBy = orderBy;

  }

}



