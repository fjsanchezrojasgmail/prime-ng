import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products-pages-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public nameLower: string = 'francisco javier';
  public nameUpper: string = 'FRANCISCO JAVIER';
  public fullName: string = 'FrAnCiScO JaViEr';
  public example: string ='example';
  public customDate: Date = new Date();

}
