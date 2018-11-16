import Header from './Header';

describe('Header Component', () => {
  it('should be a header', () => {
    const header = new Header({
      links: ['About', 'Unnecessary Fun Facts', 'Dog Photos']
    });

    expect(header.render()).toMatchSnapshot();
  });
});
