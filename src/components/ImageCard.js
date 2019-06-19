import React from 'react';

class ImageCard extends React.Component {

  

  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { spans: 0 };
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    let imageHeight = this.imageRef.current.height;
    const spans = Math.ceil(imageHeight / 5);
    this.setState({ spans });
  }

  render() {
    return (
      <div style={{ gridRowEnd: 'span ' + this.state.spans}}>
        <img 
          ref = {this.imageRef}
          alt = {this.props.image.description}
          src = {this.props.image.urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;