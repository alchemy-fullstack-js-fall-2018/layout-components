import Footer from './Footer';

describe('Footer Component', () => {
  it('should be a footer', () => {
    const footer = new Footer({
      content: 'foooooteeerrrrr'
    });

    expect(footer.render()).toMatchSnapshot();
  });
});

