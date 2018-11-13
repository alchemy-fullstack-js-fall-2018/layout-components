import Footer from './Footer';

describe('Footer component', () => {
  it('should be a footer', () => {
    const footer = new Footer({
      footerContent: ['Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quasi consequuntur veniam, eaque numquam sint tenetur velit in, voluptas quisquam eos! Possimus adipisci natus obcaecati inventore quaerat facilis enim similique']
    });

    expect(footer.render()).toMatchSnapshot();
  });
});
