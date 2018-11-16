import Footer from './Footer';

describe('Footer component', () => {
  it('is a footer', () => {
    const footer = new Footer();
    expect(footer.render()).toMatchSnapshot();
  });

});
