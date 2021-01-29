import createFlyingObjects from './createFlyingObjects';

function moveObjects(state, action) {
  if (!action.mousePosition) return state;
  const newState = createFlyingObjects(state);
  var angle = Math.Random();
  return {
    ...newState,
    angle,
  };
}

export default moveObjects;