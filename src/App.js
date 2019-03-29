import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Images from "./components/Images";
import Jumbotron from './components/Jumbotron';
import data from './data.json';

class App extends Component {
  state = {
    images: data,
    score: 0,
    topScore: 0
  }
  handleClick = (picId) => {
    let clickedTwice
    // severing the array reference with .slice()
    let newStateArray = this.state.images.slice();
    // shuffling array
    let shuffleImages = shuffleArray(newStateArray);
    // looping over array
    for (let i = 0; i < shuffleImages.length; i++) {
      // checking to see if the ID of our picture object matches
      // the ID of our picture
      if(picId === shuffleImages[i].id) {
        // checking if it has been clicked already
        if(shuffleImages[i].clicked === false) {
          // if it has not, update the "clicked" boolean to true
          // change state
          shuffleImages[i].clicked = true;
          this.setState({
            score: this.state.score + 1,
            topScore: (this.state.score >= this.state.topScore ? this.state.topScore + 1 : this.state.topScore)
          });
        } else {
          // restart the game if clickedTwice = true;
          clickedTwice = true;
        }
      }
    }
    // if a picture has been clicked twice, reset the game.
    if (clickedTwice) {
      this.setState({
        images: data,
        score: 0
      });
    } else {
      this.setState({
        images: shuffleImages
      });
    }

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }
  }
  render() {
  return (
    <div>
      <Jumbotron score={this.state.score} topScore={this.state.topScore} />
      <Images imagesData={this.state.images} handleClick={this.handleClick} />
    </div>
    );
  }
}

export default App;
