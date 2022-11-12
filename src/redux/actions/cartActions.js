import * as types from "./actionTypes";

export function addToCart(productId) {
  console.log('cart Product 98',productId);
  return {type : types.ADD_TO_CART, payload:productId}
}

export function onDecrement(cartId){
  console.log('cartId', cartId);
  return {type:types.DECREMENT_QUANTITY, payload:cartId}
}

// export function AddProduct(cartItems){
//     return {type : types.ADD_PRODUCT, cartItems};
//   }


// export function CartItems(cartItem){
//   return {type : types.LOAD_CART_ITEMS, payload:cartItem}
// }

// export function IncrementItem(item){
//   console.log('increment',item);
//   return {type : types.INCREMENT_ITEM, payload:item}
// }