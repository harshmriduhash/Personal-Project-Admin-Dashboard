import React from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeAnime } from '../actions/animes';

class ManageAnimeTable extends React.Component {

  handleRemoveAnimeItem = (id) => {
    console.log("Manage anime props:", this.props);
    this.props.removeAnime(id);
  }

  render() {

    console.log('props in anime table: ', this.props)
    let animeList = this.props.animes.map((anime) => {

      return (
        <tr key={anime.id}>
          <th scope="row">{anime.id}</th>
          <td>{anime.title}</td>
          <td>{anime.rating}</td>
          <td>{anime.price}</td>
          <td>
            <button
              onClick ={() => this.props.history.push(`/${anime.id}/edit`)}>Edit</button>
            <button
              onClick={()=>this.handleRemoveAnimeItem(anime.id)}>Delete
            </button>
          </td>
        </tr>
      )
    })
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Rating</th>
            <th>Price</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {animeList}
        </tbody>
      </Table>
    );
  }
}

function mapStateToProps(state) {
  return {
    animes: state.animes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeAnime: bindActionCreators(removeAnime, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageAnimeTable)
