import Section from './Section';

describe('Section Component', () => {
  it('has finalized scaffolding/styling', () => {
    const section = new Section();
    expect(section.render()).toMatchSnapshot();
  });
});
