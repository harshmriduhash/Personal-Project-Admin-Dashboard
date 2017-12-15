/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import Cart from '../components/Cart';

import {connect} from 'react-redux';
import {addAnimeToCart} from '../actions/animes';
import { bindActionCreators } from 'redux';
import { Card, CardBody, CardSubtitle, CardImg, Button,  Label } from 'reactstrap';


class SingleAnimeItem extends React.Component {

  render(){
    
    return (
      <div>
        <Card>
          <CardBody>

            <Label for="title">ANIME TITLE: </Label>
            <CardSubtitle>{this.props.anime ? this.props.anime.title : ''}</CardSubtitle>

            <CardImg top width="100%" src={this.props.anime ? this.props.anime.photo_url : ''} alt="Card image cap" />

            <Label for="rating">RATING: </Label>
            <CardSubtitle>{this.props.anime ? this.props.anime.rating : ''}</CardSubtitle>

            <Label for="price">PRICE:</Label>
            <CardSubtitle>${(this.props.anime ? this.props.anime.price : ''/100).toFixed(2)}</CardSubtitle>

            <Button
              onClick={this.handleAddCart}
              color="primary"
              >Add to Cart
            </Button>
          </CardBody>
        </Card>
      </div>
    )
  }
}
function mapStateToProps(state, props) {
  return {
    anime: state.animes.filter(anime => anime.id == props.match.params.animes_id)[0]
  }
}
function mapDispatchToProps(dispatch) {
  return {
    addAnimeToCart: bindActionCreators(addAnimeToCart, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleAnimeItem);
