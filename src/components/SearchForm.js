import React from 'react';

class SearchForm extends React.Component{
  state = {term: ''};

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render(){
    return (
      <div className='ui segment'>
        <form onSubmit={(e) => {this.onFormSubmit(e)}} className='ui form' >
          <div className='field'>
            <label htmlFor='imageSearch'>Search Images</label>
            <input autoComplete="off" type='text' name='imageSearch' value={this.state.term} onChange={(e) => this.setState({term: e.target.value}) }/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;