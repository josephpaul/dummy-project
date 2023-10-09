import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories:any=[];

  cartCount:number=0;

  constructor(private service: AppServiceService) { }

  ngOnInit() {

    this.getCategories();


  }

  ngAfterContentChecked(){
    this.cartCount=this.service.getCartCount();
  }


  getCategories(){

    this.service.getCategories().subscribe(resp=>{

      this.categories=resp;

      console.log('categories', this.categories);

    });
  }

}
