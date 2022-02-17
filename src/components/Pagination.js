import React from "react";
import { Grid, Pagination } from 'semantic-ui-react'


class PaginationUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      boundaryRange: 1,
      totalPages: 100,
      showFirstAndLastNav: false,
      showPreviousAndNextNav: false
    }
  }

  // nextPage = () => {
  //   this.setState({ activePage: this.state.activePage + 1 }, () => this.props.loadImages(this.state.activePage));
  // }

  // previousPage = () => {
  //   this.setState({ activePage: this.state.activePage - 1 }, () => this.props.loadImages(this.state.activePage));
  // }

  // firstPage = () => {
  //   this.setState({ activePage: 1 }, () => this.props.loadImages(this.state.activePage));
  // }

  // lastPage = () => {
  //   this.setState({ activePage: this.state.totalPages }, () => this.props.loadImages(this.state.activePage));
  // }

  handlePaginationChange = (e, { activePage }) => this.setState({ activePage }, () => this.props.loadImages(activePage));

  render() {
    const {activePage, boundaryRange, totalPages, showFirstAndLastNav, showPreviousAndNextNav} = this.state;
    return (
      <div style={{margin: '20px 0'}}>
        <Grid columns={1}>
          <Grid.Column style={{textAlign: 'center'}}>
            <Pagination
              activePage={activePage}
              boundaryRange={boundaryRange}
              onPageChange={this.handlePaginationChange}
              size='mini'
              siblingRange={1}
              totalPages={totalPages}
              // Heads up! All items are powered by shorthands, if you want to hide one of them, just pass `null` as value
              // ellipsisItem={showEllipsis ? undefined : null}
              firstItem={showFirstAndLastNav ? undefined : null}
              lastItem={showFirstAndLastNav ? undefined : null}
              prevItem={showPreviousAndNextNav ? undefined : null}
              nextItem={showPreviousAndNextNav ? undefined : null}
            />
          </Grid.Column>
        </Grid>
        {/* <div style={{ textAlign: 'center' }} className='ui container pagination-wrapper'>
          <input type="button" id="first" value="first" onClick={this.firstPage} disabled={this.state.activePage === 1 ? true : false} />
          <input type="button" id="previous" value={this.state.activePage - 1} onClick={this.previousPage} disabled={this.state.activePage === 1 ? true : false} />
          <input type="button" id="next" value={this.state.activePage + 1} onClick={this.nextPage} disabled={this.state.activePage === this.state.totalPages ? true : false} />
          <input type="button" id="last" value={this.state.totalPages} onClick={this.lastPage} disabled={this.state.activePage === this.state.totalPages ? true : false} />
        </div> */}
        <span>Showing results for: <span style={{ fontSize: '20px', fontWeight: '600' }}>{this.props.searchTerm}</span></span>
      </div>
    );
  }
}

export default PaginationUI;