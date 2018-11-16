import Section from './Section';

describe('section', () => {
  it('should be a section', () => {
    const section = new Section({
      children: []
    });
    expect(section.render()).toMatchSnapshot();
  });
});
