import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  products:any=[];

  categoryName:string="";

  cartCount:number=0;

  constructor(private service: AppServiceService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params=>{
      this.categoryName=params['category'];
    })

    this.getCatProducts();

  }

  ngAfterContentChecked(){
    this.cartCount=this.service.getCartCount();
  }


  getCatProducts(){

    this.service.getByCategory(this.categoryName).subscribe(res=>{

      this.products=res;

      console.log(this.products);

    });
  }

}
