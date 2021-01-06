// very wide to provide as full screen feeling
export const skyWidth = 5000;

export const maxScreenHeight = -600;
export const minScreenHeight = 300;
export const maxScreenWidth = -300;
export const minScreenWidth = 300;


export const gameWidth = 800;

export const maxFlyingObjects = 19;

function range(size, startAt = 0, step = 1) {
  return [...Array(size).keys()].map(i => i * step + startAt);
}

export const flyingObjectsStarterYAxis = range(maxFlyingObjects, 0, 0.5).map(function(x) { return x * 100 + maxScreenHeight; });

export const flyingObjectsStarterXPositions = range(maxFlyingObjects, 0, 0.33).map(function(x) { return x * 100 + maxScreenWidth; });
