/*eslint-disable*/
import React from 'react';
import Cart from './Cart';
import AnimeList from './AnimeList';
import SingleAnimeItem from './SingleAnimeItem';
import DetailsForAnimeList from './DetailsForAnimeList';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSortType } from '../actions/sortAnimes';
import { updateTitleFilter } from '../actions/titleFilter';
import { Container, Row, Col, Card, CardBody, CardSubtitle, CardImg, Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Main extends React.Component {

  render () {

    return (
      <div className="container">
        <Form>
          <FormGroup>
            <label htmlFor="filter">FILTER ITEMS BY: </label>
                <input
                  className="form-control"
                  id="filter"
                  placeholder="ANIME NAME"
                  onChange={(e) => this.props.updateTitleFilter(e.target.value)}/>
          </FormGroup>
          <FormGroup>
            <label htmlFor="sort">SORT BY: </label>
              <select
                className="form-control"
                id="sort"
                onChange={(e) => this.props.updateSortType(e.target.value)}>
                <option value="title">TITLE</option>
                <option value="rating">RATING</option>
                <option value="price">PRICE</option>
            </select>
        </FormGroup>
        <Container>
          <Row>
              <Col><AnimeList /></Col>
              <Col><Cart/></Col>
          </Row>
        </Container>
      </Form>
    </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateTitleFilter: bindActionCreators(updateTitleFilter, dispatch),
    updateSortType: bindActionCreators(updateSortType, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Main);
