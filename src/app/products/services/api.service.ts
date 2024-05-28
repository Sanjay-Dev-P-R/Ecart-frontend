import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  cartItemCount = new BehaviorSubject(0)//to hold cart item count

  searchTerm= new BehaviorSubject('')//to hold searh value
  //using the behaviour subject to pass stream of data from one component to another

  constructor(private http:HttpClient) {

    this.cartCount();
   }

  BASE_URL='https://ecart-backend-94s1.onrender.com'

//  api function to get all products from the database
 getAllProducts(){
  return this.http.get(`${this.BASE_URL}/products/all-products`)
 }

 //  api function to get view particular product from the database
 viewProduct(id:any){
  return this.http.get(`${this.BASE_URL}/products/view-product/${id}`)
 }

// api function to add product to the wishlist
addToWishlist(id:any,title:any,price:any,image:any){

  const body={
    id,
    title,
    price,
    image
  }

  return this.http.post(`${this.BASE_URL}/wishlists/add-to-wishlist`,body)
}

// view wishlist products
viewWishlist(){
  return this.http.get(`${this.BASE_URL}/wishlists/view-all-wishlists`)
}

deleteWishlistProduct(id:any){
  return this.http.delete(`${this.BASE_URL}/wishlists/delete-wishlist-product/${id}`)
}

addToCart(product:any){
  // product is an object with properties
  // get the product details - id,title,price,image,quantity
  const body={
    id:product.id,
    title:product.title,
    price:product.price,
    image:product.image,
    quantity:product.quantity
  }
  return this.http.post(`${this.BASE_URL}/carts/add-to-cart`,body)
}

getCart(){
  return this.http.get(`${this.BASE_URL}/carts/get-cart`)
}
// to get cart product count
cartCount(){
  this.getCart().subscribe((result:any)=>{
    this.cartItemCount.next(result.length)

  })
}

deleteCartProduct(id:any){
  return this.http.delete(`${this.BASE_URL}/carts/delete-product/${id}`)
}

// increment cart product
incrementProduct(id:any){
  return this.http.get(`${this.BASE_URL}/carts/increment-product/${id}`)
}

// increment cart product
decrementProduct(id:any){
  return this.http.get(`${this.BASE_URL}/carts/decrement-product/${id}`)
}

}

