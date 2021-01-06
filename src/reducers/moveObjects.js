import createFlyingObjects from './createFlyingObjects';

function moveObjects(state) {
  const newState = createFlyingObjects(state);
  return {
    ...newState,
  };
}

export default moveObjects;