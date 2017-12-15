/* eslint-disable */
import React from 'react';
import CartItem from './CartItem';
import SingleAnimeItem from '../components/SingleAnimeItem';
import DetailsForAnimeList from '../components/DetailsForAnimeList';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addAnimeToCart } from '../actions/animes';
import { removeAnimeFromCart } from '../actions/animes';
import { Container, Card, CardTitle, CardSubtitle, Form, FormGroup, Label, Input, Button } from 'reactstrap';


const Cart = (props) => {
  let total = 0;
  let subtotal = 0;
  let tax = 0;
  let animeItemsInCart = [];
  if(props.cart){
    animeItemsInCart = props.cart.map(i => <CartItem key={i.id} item={i} />)
    subtotal = props.cart.reduce((t, i) => t + i.price, 0);
    subtotal = parseInt(subtotal);
    tax = (subtotal * .086).toFixed(2);
    total = (subtotal + parseInt(tax));
    total = total.toFixed(2);
  }

    return (
      <div id="cart">
        <Container style={{marginTop: 30}}>
          <Card body inverse color="info">
            <CardTitle>YOUR CART</CardTitle>
            <CardTitle>{animeItemsInCart}</CardTitle>
            <CardTitle>SUBTOTAL: ${subtotal}</CardTitle>
            <CardTitle>TAX: ${tax}</CardTitle>
            <CardTitle>TOTAL: ${total}</CardTitle>
            <Button
              color="primary">CHECKOUT
            </Button>
          </Card>
        </Container>
      </div>
    )
}

function mapStateToProps(store, props) {
  return {
    cart: store.animes.filter(c => c.in_cart)
  }
}

export default connect(mapStateToProps, null)(Cart)
