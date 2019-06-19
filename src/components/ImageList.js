import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';
const ImageList = (props) => {
  let uid = 0;
  const images = props.images.map((image) => {
    uid += 1;
    return (
      <ImageCard image={image} key={uid} />
    );
  });
  return (<div className='image-list'>{images}</div>);
};

export default ImageList;