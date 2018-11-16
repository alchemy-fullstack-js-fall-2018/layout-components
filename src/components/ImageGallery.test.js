import ImageGallery from './ImageGallery';

describe('Image Gallery Component', () => {
  it('is an image gallery', () => {
    const images = [
      {
        image: ''
      }
    ];

    const imageGallery = new ImageGallery({ images });

    expect(imageGallery.render).toMatchSnapshot();
  });
});
