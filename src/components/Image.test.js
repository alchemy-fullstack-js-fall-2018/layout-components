import Image from './Image';

describe('Image Component', () => {
  it('has finalized scaffolding/styling', () => {
    const image = new Image({
      images: ['dummy.jpg']
    });

    expect(image.render()).toMatchSnapshot();
  });
});
