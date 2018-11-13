import Footer from './Footer';
describe('footer', () => {
  it('should be a footer', () => {
    const footer = new Footer({
      text: '&copy; 2018 Alex Rankin'
    });
    expect(footer.render()).toMatchSnapshot();
  });
});
