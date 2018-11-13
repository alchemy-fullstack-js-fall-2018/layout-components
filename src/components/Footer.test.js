import Footer from './Footer';

describe('Footer Component', () => {

  it('should be a footer', () => {
    const footer = new Footer({
      contactIcons: ['far fa-envelope', 'fab fa-linkedin-in', 'fab fa-github']
    });
    expect(footer.render()).toMatchSnapshot();
  });
})