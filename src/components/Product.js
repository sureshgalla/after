import React from 'react';
import PropTypes from 'prop-types';

export default function Product({product,onAddToCart}) {
    const {id,title, price, url } = product;
    const onAddToCartClick = e=> onAddToCart(e.target.id);
  return (
    <div>
      <div><img src={url} width={200}/></div>
      <div><span>{title}</span><span>{price}</span></div>
      <div ><button id={id} onClick={onAddToCartClick}>add to cart</button></div>
    </div>
  )
}

Product.propTypes = {
  product:PropTypes.object,
  onAddToCart: PropTypes.func
}
