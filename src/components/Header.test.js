import Header from './Header';
describe('header', () => {
  it('should be a header', () => {
    const header = new Header({
      links: [
        'about'
      ]
    });
    expect(header.render()).toMatchSnapshot();
  });
});
