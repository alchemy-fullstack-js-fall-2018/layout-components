import Footer from './Footer';

describe('Footer Component', () => {
  it('should be a footer', () => {
    const footer = new Footer({
      peopleToThank: ['Cecilia', 'Jasper']
    });

    expect(footer.render()).toMatchSnapshot();
  });
});