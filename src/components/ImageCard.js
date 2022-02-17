import React from 'react';
// import {average,prominant} from 'color.js'

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gridRowEnd: 0};
    this.imageRef = React.createRef();
  }

  /* calling the setgridRowEnd method after the image loads*/
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setGridRowEnd);
  }

  setGridRowEnd = () => {
    const imgHeight = this.imageRef.current.clientHeight;
    /* 10 is set as grid-auto-rows height in css */
    const spans = Math.ceil(imgHeight / 10) + 1;
    this.setState({ gridRowEnd: spans });
  }

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.gridRowEnd}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;