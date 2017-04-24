import React, { Component } from 'react';
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';
// import logo from './logo.svg';
// import './App.css';

const ImageTransformations = ({width, slectedShirt}) => {
    return (
        <Image publicID={selectedShirt.main + ".jpg"}>
          <Transformation width={width} crops="scale" />
        </Image>
    );
};

class App extends Component {

  constructor(props) {
    super(props);
    const defaultShirt = {id: 1, main: 'shirt_only'};
    this.state = {
        shirts: [
            defaultShirt,
            {id: 2, main: 'laying-shirt'},
            {id: 3, main: 'hanging_t-shirt'}
        ],
        selectedShirt: defaultShirt,
    };
  }

  slectedShirt(thumb) {
    this.setState({selectedShirt: thumb}, _ => this.forceUpdate())
  }

  render() {
    return (
      <div className="App">
        <CloudinaryContext cloudName="jbull238">
          <div id="imageDemoContainer">
            <div id="mainImage">
              <ImageTransformations
                width="600"
                rgb={rgb}
                selectedShirt={this.state.selectedShirt}
                text={this.state.text} />
            </div>
            <div id="imageThumbs">
              <ul id="thumbs">
      </div>
    );
  }
}

export default App;
