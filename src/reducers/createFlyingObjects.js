import {
  flyingObjectsStarterYAxis, maxFlyingObjects,
  flyingObjectsStarterXPositions
} from '../utils/constants';

export default (state) => {
  if ( ! state.gameState.started) return state; // game not running

  const flyingObjects = state.gameState;
  const createNewObject = (
    flyingObjects.length < maxFlyingObjects
  );

  if ( ! createNewObject) return state; // no need to create objects now

  const id = (new Date()).getTime() * flyingObjects.length;
  const predefinedXPosition = Math.floor(Math.random() * maxFlyingObjects);
  const flyingObjectXPosition = flyingObjectsStarterXPositions[predefinedXPosition];
  const predefinedYPosition = Math.floor(Math.random() * maxFlyingObjects);
  const flyingObjectYPosition = flyingObjectsStarterYAxis[predefinedYPosition];
  const newFlyingObject = {
    position: {
      x: flyingObjectXPosition,
      y: flyingObjectYPosition,
    },
    id,
  };

  return {
    ...state,
    gameState: {
      ...state.gameState,
      flyingObjects: [
        ...state.gameState.flyingObjects,
        newFlyingObject
      ],
    }
  }
}