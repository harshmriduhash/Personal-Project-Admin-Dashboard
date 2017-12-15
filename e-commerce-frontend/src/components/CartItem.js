/*eslint-disable*/
import React from 'react';
import Icon from 'react-icons-kit';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { trash } from 'react-icons-kit/fa/trash';
import { removeAnimeFromCart } from '../actions/animes';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardImg, Button, Form, FormGroup, Label, Input } from 'reactstrap';


class CartItem extends React.Component {

  handleRemoveItem = () => {
    this.props.removeAnimeFromCart(this.props.item.id)
  }

  render () {
    
    return (
      <div>
        <Card body inverse color="warning">
          <Row>
            <Col><CardTitle>{this.props.item.title}</CardTitle></Col>
            <Col><CardTitle><Icon icon={trash} onClick={this.handleRemoveItem}/></CardTitle></Col>
          </Row>
        </Card>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return {
    removeAnimeFromCart: bindActionCreators(removeAnimeFromCart, dispatch)
  }
}
export default connect(null, mapDispatchToProps)(CartItem)
