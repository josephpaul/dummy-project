import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  products: any=[];

  cartCount:number=0;

  constructor(private service:AppServiceService) { }

  ngOnInit(): void {

    this.getProducts();

  }

  ngAfterContentChecked(){
    this.cartCount=this.service.getCartCount();
  }

  getProducts(){

    this.service.getProducts().subscribe(res=>{

      this.products=res;

      console.log(this.products);

    });
  }

  goTo(){

  }

}
