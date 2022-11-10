import React, { Component } from 'react'
import { connect } from 'react-redux';
import {addToCart} from "../redux/actions/cartActions";

 class Cart extends Component {
  getNameById = id=>{
    return this.props.products.filter(p=> p.id == id)[0]
  }
  onIncrement= e => {
    this.props.addToCart(e.target.id)
  }
  getTotal = ()=>{
    return Object.keys(this.props.cart).reduce((total,c)=>{
      console.log(total , this.getNameById(c).price , this.props.cart[c]);
      total= total + (this.getNameById(c).price * this.props.cart[c])
      return total;
    },0)
  }
   render() {
    console.log();
    console.log(Object.keys(this.props.cart));
    return (
      <div>
        <table border={2}>
          <tr><th>image</th><th>title</th>quantity<th>price</th></tr>
        {Object.keys(this.props.cart).map(id=> this.getNameById(id)).map(({id, title, price, url},i)=> <tr key={i}>
          <td><img src={url} width={200}/></td>
          <td>{title}</td>
          <td><button>-</button>{this.props.cart[id]}<button id={id} onClick={this.onIncrement}>+</button></td>
          <td>{price}</td>
        </tr>)}
        <tr>
          <td></td>
          <td></td>
          <td>total</td>
          <td>{this.getTotal()}</td>
        </tr>
        </table>
      </div>
    )
  }
}
const mapStateToProps= ({products,
  cart}) =>{
  return {
    products,
    cart
  }
}
export default connect(mapStateToProps,{addToCart})(Cart);