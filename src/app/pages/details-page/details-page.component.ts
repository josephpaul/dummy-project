import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  product:any={};

  productId:any;

  cart:cart[]=[];

  cartCount:number=0;



  constructor(private service:AppServiceService, private route:ActivatedRoute) { 


    this.route.params.subscribe(params=>{
      this.productId=params['id'];
    })


  }

  ngOnInit(): void {

    this.getProductDetails();

  }

  ngAfterContentChecked(){
    this.cartCount=this.service.getCartCount();
  }

  getProductDetails(){

    this.service.getProductById(this.productId).subscribe(resp=>{
      this.product=resp;

      console.log('product', this.product);
    });
  
  }


  addToCart(item:any){

    
    swal.fire({
      title: 'Are you sure you want to add this item to cart',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Add to Cart',
      customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn',
          footer: 'flex-row-reverse'
      },
      buttonsStyling: false
    }).then((result) => {
      if (result.isConfirmed) {


        let items=localStorage.getItem('cart') as string;

        if(items){
          this.cart=JSON.parse(items);
    
        }
    
        this.cart.push({id:item.id, title:item.title, qty:1, unitPrice:item.price});
    
        localStorage.setItem('cart', JSON.stringify(this.cart));


      }});
    





  }





}

export interface cart{id:number, unitPrice:number, qty:number, title:string }

