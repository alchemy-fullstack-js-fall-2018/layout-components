import Header from './Header';

describe('Header Component', () => {
  it('has finalized scaffolding/styling', () => {
    const header = new Header({
      links: ['heyoooooo']
    });

    expect(header.render()).toMatchSnapshot();
  });
});
