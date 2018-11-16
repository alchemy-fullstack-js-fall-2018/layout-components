import Footer from './Footer';

describe('Footer Component', () => {
  it('has finalized scaffolding/styling', () => {
    const footer = new Footer({
      links: ['eeeeeyyyyyyeah!']
    });

    expect(footer.render()).toMatchSnapshot();
  });
});
