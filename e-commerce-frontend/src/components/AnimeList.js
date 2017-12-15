/* eslint-disable */
import React from 'react';
import ReactStars from 'react-stars';
import SingleAnimeItem from './SingleAnimeItem';
import DetailsForAnimeList from './DetailsForAnimeList';

import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';


class AnimeList extends React.Component {

  render () {
    console.log('AnimeList props 1: ', this.props)
    function sortByPriceOrRating(a, b, type) {
      return a[type] - b[type];
    }

    function sortByTitle(a, b) {
      return a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1
    }

    let containerMargin = { marginTop: '35px' }
    console.log('AnimeList props 2: ', this.props)
    let listOfAnimes = this.props.anime
      .filter(anime => anime.title.includes(this.props.titleFilter))
      .sort()
      .map(anime => <DetailsForAnimeList key={anime.id} anime={anime} />)

    return (
      <Container style={containerMargin}>
        <Col>
          {listOfAnimes}
        </Col>
      </Container>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    anime: state.animes,
    titleFilter: state.titleFilter,
    sortAnimes: state.sortAnimes
  }
}

export default connect(mapStateToProps, null)(AnimeList)
