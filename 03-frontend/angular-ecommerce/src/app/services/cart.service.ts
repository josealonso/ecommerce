import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  // Subject is a subclass of Observable
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }

  addToCart(theCartItem: CartItem) {

    let alreadyExistsInCart: boolean = false;
    let nonCartItem: CartItem = {
      id: "-1",
      name: '',
      imageUrl: '',
      unitPrice: 0,
      quantity: 0
    };
    let existingCartItem: CartItem = nonCartItem;  //undefined;
    // let existingCartItem = this.cartItems.find(cartItem => cartItem.id === theCartItem.id);

    if (this.cartItems.length > 0) {

      for (let tempCartItem of this.cartItems) {
        if (tempCartItem.id === theCartItem.id) {
          existingCartItem = tempCartItem;
          break;
        }
      }

      alreadyExistsInCart = (existingCartItem != nonCartItem);
    }

    if (alreadyExistsInCart) {
      existingCartItem.quantity++;
    }
    else {
      this.cartItems.push(theCartItem);
    }

    this.computeCartTotals();
  }

  computeCartTotals() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let cartItem of this.cartItems) {
      // let quantity = cartItem.quantity;
      totalPriceValue += +cartItem.unitPrice * cartItem.quantity;
      totalQuantityValue += cartItem.quantity;
    }

    // publish the new values
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    this.logCartData(totalPriceValue, totalQuantityValue);
  }

  logCartData(totalPriceValue: number, totalQuantityValue: number) {

    console.log('Contents of the cart');
    for (let cartItem of this.cartItems) {
      const subTotalPrice = cartItem.quantity * cartItem.unitPrice;
      console.log(`name: ${cartItem.name}, quantity: ${cartItem.quantity}`);
      console.log(`unitPrice: ${cartItem.unitPrice}, subTotalPrice: ${subTotalPrice}`);
    }

    console.log(`totalPrice: ${totalPriceValue.toFixed(2)}, totalQuantity: ${totalQuantityValue}`);
    console.log('============');
  }

}
















