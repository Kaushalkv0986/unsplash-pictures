import React from 'react';
import ImageCard from './ImageCard';
import '../styles/ImageList.css';

const ImageList = (props) => {
  const imageCards = props.images.map((image) => {
    return <ImageCard image = {image} key={image.id} />
  })

  return <div className='image-list'>{imageCards}</div>;
}

export default ImageList;