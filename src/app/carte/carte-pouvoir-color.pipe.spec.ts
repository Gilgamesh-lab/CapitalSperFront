import { cartePouvoirColorPipe } from './carte-pouvoir-color.pipe';

describe('cartePouvoirColorPipe', () => {
  it('create an instance', () => {
    const pipe = new cartePouvoirColorPipe();
    expect(pipe).toBeTruthy();
  });
});
