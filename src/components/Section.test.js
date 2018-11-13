import Section from './Section';

describe('section', () => {
  it('should be a section', () => {
    const section = new Section({
      content: 'Hey I\'m a section'
    });
    expect(section.render()).toMatchSnapshot();
  });
});
