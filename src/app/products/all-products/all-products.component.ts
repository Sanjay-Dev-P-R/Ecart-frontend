import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{

  searchKey:string=''

  constructor(private api:ApiService){}

  allProducts:any=[]
  ngOnInit(): void {
   this.api.getAllProducts().subscribe((result:any)=>{
    console.log(result);//array of 20 data
    this.allProducts=result
    
   });
  //  this.searchKey=this.api.searchTerm
  this.api.searchTerm.subscribe((result:any)=>{
    this.searchKey=result
    console.log(this.searchKey);
    
  })
  }




}
