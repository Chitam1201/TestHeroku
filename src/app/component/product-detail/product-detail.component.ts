import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../commom/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product ;
  constructor(private route: ActivatedRoute) {
    this.product = new Product('', '');
    
    if (route.snapshot.params['id'])
      this.product.productCode = route.snapshot.params['id'];
  }
  changeDetail(form: NgForm){
    console.log(form.value);

    this.product.productCode = form.value.productCode;
    this.product.productCode = this.product.productCode.toUpperCase();

  }

  ngOnInit() {
  }

}
