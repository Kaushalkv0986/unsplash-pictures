import React from 'react';
import SearchForm from './SearchForm';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import Spinner from './Spinner';
import Pagination from './Pagination';
import ScrollToTop from './ScrollToTop';


class App extends React.Component {
  state = { images: [], searchTerm: '', currentPage: 1 };
  imgListLength = null;
  paginationLinks = null;

  /* get the search term from child component SearchForm and make api call */
  onSearchFormSubmit = (term) => {

    /*passing the loadImage function as a callback because 
    if we call the function normally, the searchTerm will not be initialized*/
    this.setState({ searchTerm: term }, () => {
      console.log(this.state);
      this.loadImages();
    });
  }

  loadImages = async (activePage) => {
    console.log(this.state.searchTerm);
    const response = await unsplash.get('search/photos', {
      params: { query: this.state.searchTerm, page: activePage }
    })
    this.imgListLength = response.data.results.length;
    this.setState({ images: response.data.results });
  }

  getContent() {
    if (this.state.searchTerm === null || this.state.searchTerm === '') {
      return <span style={{ fontWeight: '600' }}>Please enter some keyword to search.</span>;
    }
    else {

      if (this.imgListLength === 0) {
        return <span style={{ fontWeight: '600' }}>No results found!</span>;
        // return <Spinner message="Loading..." />
      }

      /* initially state.images will will 0 */
      if (this.state.images.length === 0 && this.imgListLength === 0) {
        return <Spinner message="Loading..." />;
      }
      if (this.state.images.length !== 0 && this.imgListLength !== 0) {
        return <Pagination loadImages = {this.loadImages} searchTerm={this.state.searchTerm}/>
      }
    }

  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '20px' }}>
        <SearchForm onFormSubmit={this.onSearchFormSubmit} />
        <div>
          {this.getContent()}
          <ImageList images={this.state.images} />
          <ScrollToTop />
        </div>
      </div>
    );
  }
}
export default App;