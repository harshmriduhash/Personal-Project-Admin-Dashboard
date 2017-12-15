/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import Cart from './components/Cart';
import Main from './components/Main';
import Footer from './components/Footer';
import TopNav from './components/TopNav';
import AnimeList from './components/AnimeList';
import AdminPage from './components/AdminPage';
import EditAnimeForm from './components/EditAnimeForm';
import SingleAnimeItem from './components/SingleAnimeItem';
import DetailsForAnimeList from './components/DetailsForAnimeList';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAnime } from './actions/animes';
import { Switch, Route } from 'react-router';
import { Container, Row, Col, Button } from 'reactstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';


class App extends React.Component {

  componentDidMount(){
    this.props.getAnime();
  }

  render() {
    
    return (
      <div className="App">
        <TopNav />
            <Router>
              <Switch>
                <Route exact path='/' component={Main} />
                <Route exact path='/cart' component={Cart} />
                <Route exact path='/admin' component={AdminPage} />
                <Route exact path='/:id' component={SingleAnimeItem} />
                <Route exact path='/:id/edit' component={EditAnimeForm} />
              </Switch>
            </Router>
          <Footer/>
        </div>
      );
    }
  }
function mapDispatchToProps(dispatch) {
  return {
    getAnime: bindActionCreators(getAnime, dispatch)
  }
}
export default connect(null, mapDispatchToProps)(App);
