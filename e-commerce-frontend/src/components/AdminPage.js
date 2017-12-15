import React from 'react';
import AddAnimeForm from './AddAnimeForm';
import ManageAnimeTable from './ManageAnimeTable';

class AdminPage extends React.Component {

  render () {
    
    return (
      <div>
        {/*Add Anime Form*/}
        <AddAnimeForm/>
        {/*Manage Anime Table*/}
        <ManageAnimeTable history ={this.props.history}/>
      </div>
    )
  }
}
export default AdminPage
