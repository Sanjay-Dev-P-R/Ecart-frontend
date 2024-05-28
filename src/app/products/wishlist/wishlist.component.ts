import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{

  allWishlist:any=[];

  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.api.viewWishlist().subscribe((result:any)=>{
      console.log(result);//wihslist product details
      this.allWishlist=result
      
    },
    (result:any)=>{
      console.log(result.error);
      
    })
  }


  deleteWishlistItem(id:any){
    this.api.deleteWishlistProduct(id).subscribe((result:any)=>{
      this.allWishlist=result;//assign remaining items to the wishlist
      alert("product removed successfully")
    })
  }
}
