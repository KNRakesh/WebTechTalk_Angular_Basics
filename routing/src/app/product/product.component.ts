import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  productName ='';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productName = this.route.snapshot.params['id'];
  }

}
