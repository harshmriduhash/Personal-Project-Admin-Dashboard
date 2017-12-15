/* eslint-disable */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {editAnime} from '../actions/animes';
import {Field, reduxForm} from 'redux-form';

class EditAnimeForm extends React.Component {

  editAnime = (anime) => {
    this.props.editAnime(this.props.match.params.id, anime, this.props.history)
  }

  render () {

    console.log('props: ', this.props)
    return (
      <form onSubmit={this.props.handleSubmit(this.editAnime)}>
        <div>
          <label htmlFor="title">Title</label>
          <Field name="title" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="rating">Rating</label>
          <Field name="rating" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <Field name="price" component="input" type="number" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

EditAnimeForm = reduxForm({
  // a unique name for the form
  form: 'EditAnime'
})(EditAnimeForm)

function mapStateToProps(state, props) {
  return {
    initialValues: state.animes.filter(anime => anime.id == props.match.params.id)[0]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    editAnime: bindActionCreators(editAnime, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditAnimeForm);
