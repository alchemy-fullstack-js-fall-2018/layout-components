import Image from './Image';

describe('image', () => {
  it('should show an image', () => {
    const image = new Image({
      content: {}
    });
    expect(image.render()).toMatchSnapshot();
  });
})
;