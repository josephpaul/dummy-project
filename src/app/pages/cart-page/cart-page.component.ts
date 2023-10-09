import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {


  cart:{id:number, unitPrice:number, qty:number, title:string }[]=[];

  cartCount:number=0;

  constructor(private service:AppServiceService) { }

  ngOnInit(): void {

    let items=localStorage.getItem('cart') as string;

    this.cart=JSON.parse(items);


  }

  ngAfterContentChecked(){
    this.cartCount=this.service.getCartCount();
  }


  deleteItem(id:number){

    
    swal.fire({
      title: 'Are you sure you want to Delete?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      customClass: {
          confirmButton: 'btn btn-danger',
          cancelButton: 'btn',
          footer: 'flex-row-reverse'
      },
      buttonsStyling: false
    }).then((result) => {
      if (result.isConfirmed) {

       this.cart.splice(this.cart.findIndex(e=>e.id===id),1);

       localStorage.setItem('cart', JSON.stringify(this.cart));



      }
    })
  }



  findTotal(){

    let total=0;

    if(this.cart&&this.cart.length){
      this.cart.forEach(element => {
        total+=element.unitPrice*element.qty;
      });
    }

    return total;
  }

}
