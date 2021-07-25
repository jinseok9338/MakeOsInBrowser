import 'jest-canvas-mock';

import preloadAll from 'jest-next-dynamic';
import sinon from 'sinon';

const { createElement } = global.document;
const FAKECanvasElement = {
  getContext: jest.fn(() => ({
    fillStyle: null,
    fillRect: jest.fn(),
    drawImage: jest.fn(),
    getImageData: jest.fn()
  }))
};

/**
 * Using Sinon to stub the createElement function call with the original method
 * unless we match the 'canvas' argument.  If that's the case, return the Fake
 * Canvas object.
 */
sinon
  .stub(global.document, 'createElement')
  .callsFake(createElement)
  .withArgs('canvas')
  .returns(FAKECanvasElement);

beforeAll(async () => {
  await preloadAll();
});
