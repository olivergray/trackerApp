import { START_GAME } from '../actions';
import startGame from './startGame';

const initialGameState = {
  started: false,
  kills: 0,
};

const initialState = {
  gameState: initialGameState,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case START_GAME:
      return startGame(state, initialGameState);
    default:
      return state;
  }
}

export default reducer;