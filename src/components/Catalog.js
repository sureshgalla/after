import React, { Component } from 'react'
import { connect } from 'react-redux'
import Product from './Product';
import {addToCart} from "../redux/actions/cartActions";
import PropTypes from 'prop-types';
 class Catalog extends Component {
  render() {
    console.log(this.props.products);
    return (
      <div className='wrapper'>
        {this.props.products.map(product => <Product key={product.id} onAddToCart={this.props.addToCart} product={product}/>)}
      </div>
    )
  }
}

Catalog.propTypes ={
  products : PropTypes.array,
  addToCart: PropTypes.func
}
const mapStateToProps = ({products}) =>{
    return {
        products:products
    }
}
export default connect(mapStateToProps,{addToCart})(Catalog)
