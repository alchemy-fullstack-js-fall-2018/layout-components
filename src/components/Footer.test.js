import Footer from './Footer';

describe('Footer component', () => {
  it('should be a footer', () => {
    const footer = new Footer({
      footerContent: 'I like pizza and sushi; however, I like coding more.',
    });

    expect(footer.render()).toMatchSnapshot();
  });
});
