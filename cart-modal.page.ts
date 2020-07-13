import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {

  amountForm: any;
  zipCodeForm: any;
  finishBuyForm: any;

  constructor() { }

  ngOnInit() {
    this.amountForm = [];
    this.zipCodeForm = [];
    this.finishBuyForm = [];
  }

}
