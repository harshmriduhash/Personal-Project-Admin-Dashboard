/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import Cart from '../components/Cart';
import SingleAnimeItem from './SingleAnimeItem';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {addAnimeToCart} from '../actions/animes';
import { Card, CardBody, CardSubtitle, CardImg, Button, Label } from 'reactstrap';


const DetailsForAnimeList = (props) => {

  let onsale = "ON SALE";

  this.handleAddItem = () => {
    props.addAnimeToCart(props.anime.id)
  }

  return (
    <div>
      <Card>
        <CardBody>
          <Label for="title">ANIME TITLE: </Label>
          <CardSubtitle>{props.anime ? props.anime.title : ''}</CardSubtitle>
          <CardImg top width="100%" src={props.anime ? props.anime.photo_url : ''} alt="Card image cap" />
          <Label for="rating">RATING: </Label>
          <CardSubtitle>{props.anime ? props.anime.rating : ''}</CardSubtitle><br/>
          <Label for="price">PRICE:</Label>
          <CardSubtitle>${(props.anime ? props.anime.price : '')}</CardSubtitle><br/>
          <CardSubtitle>{props.anime.on_sale? onsale : null}</CardSubtitle><br/>
            <Button
              onClick={this.handleAddItem}
              color="primary"
              >ADD TO CART
            </Button>
          </CardBody>
        </Card>
      </div>
    )
  }
function mapDispatchToProps(dispatch) {
  return {
    addAnimeToCart: bindActionCreators(addAnimeToCart, dispatch)
  }
}
export default connect(null, mapDispatchToProps)(DetailsForAnimeList);
