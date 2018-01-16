import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addAnime} from '../actions/animes';
import { Field, reduxForm } from 'redux-form';


class AddAnimeForm extends React.Component {

  addAnime = (anime) => {
    console.log('anime: ', anime)
    this.props.addAnime(anime)
  }

  render () {

    return (
      <form onSubmit={this.props.handleSubmit(this.addAnime)}>
        <div>
          <label htmlFor="title">Title: </label>
          <Field name="title" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="rating">Rating: </label>
          <Field name="rating" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="price">Price: </label>
          <Field name="price" component="input" type="number" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

AddAnimeForm = reduxForm({
  // a unique name for the form
  form: 'AddAnime'
})(AddAnimeForm)

function mapDispatchToProps(dispatch) {
  return {
    addAnime: bindActionCreators(addAnime, dispatch)
  }
}
export default connect(null, mapDispatchToProps)(AddAnimeForm);
