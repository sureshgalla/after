import * as types from "../actions/actionTypes";
import initialState from "./initialState";


export default function cartReducer (state = initialState.cart, action){
  switch(action.type){
    case types.ADD_TO_CART:
      return {...state, [action.payload]:(state[action.payload]||0) + 1};
    case types.DECREMENT_QUANTITY:{
      const{[action.payload]:quantity, ...rest} = state;
      return quantity > 1 ? {...rest, [action.payload]:quantity-1}: {...rest}
      
      
      //return {...state, [action.payload]:state[action.payload] - 1 }
    }
      default:
        return state;
    }
}

// export default function cartReducer(state=initialState.cart, action) {
//   switch (action.type) {
//     case types.ADD_PRODUCT:
//       return  [...state, {...action.cartItems}]
//     case types.LOAD_CART_ITEMS:
//       return  [...state, {...action.cart}];
//     case types.INCREMENT_ITEM :
//       console.log('increment');
//       return [...state, action.payload += action.payload]
//     default:
//       return state;
//   }
// }
//let addedItem = state.products.find(product=> product.id === action.id)
/*{
  ...state,
  cartItems: [...state.cartItems, addedItem],
  total : newTotal
}*/
//return [...state,  {cartData:action.payload} ]