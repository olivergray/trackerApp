import { connect } from 'react-redux';
import Application from './Cancellation';
import { startGame } from '../actions/index';

const mapStateToProps = state => ({
  gameState: state.gameState,
});

const mapDispatchToProps = dispatch => ({
  startGame: () => {
    dispatch(startGame());
  },
});

const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Application);

export default Game;