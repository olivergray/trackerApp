import { MOVE_OBJECTS, START_GAME } from '../actions';
import startGame from './startGame';
import moveObjects from './moveObjects';

const initialGameState = {
  started: false,
  kills: 0,
  flyingObjects: [],
};

const initialState = {
  gameState: initialGameState,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_OBJECTS:
      console.log('called')
      return moveObjects(state, action);
    case START_GAME:
      return startGame(state, initialGameState);
    default:
      return state;
  }
}

export default reducer;