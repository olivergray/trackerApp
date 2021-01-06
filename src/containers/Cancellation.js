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
        moveObjects={this.props.moveObjects}
      />
    );
  }
}
Application.propTypes = {
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    kills: PropTypes.number.isRequired,
    flyingObjects: PropTypes.arrayOf(PropTypes.shape({
      position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
      }).isRequired,
      id: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
  startGame: PropTypes.func.isRequired,
};

export default Application;