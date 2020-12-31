import React, {Component} from "react";
import PropTypes from 'prop-types';
import Canvas from "../components/Canvas";

class Application extends Component {
  componentDidMount() {
    window.onresize = () => {
        const cnv = document.getElementById('cancellation-canvas');
        cnv.style.width = `${window.innerWidth}px`;
        cnv.style.height = `${window.innerHeight}px`;
    };
    window.onresize();
  }     
  render() {
    return (
      <Canvas 
        gameState={this.props.gameState}
        startGame={this.props.startGame}
      />
    );
  }
}
Application.propTypes = {
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    kills: PropTypes.number.isRequired,
  }).isRequired,
  startGame: PropTypes.func.isRequired,
};

export default Application;