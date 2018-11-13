import Section from './Section';

describe('Section Component', () => {
  it('should be a section', () => {
    const section = new Section({
      sectionContent: 'section'
    });

    expect(section.render()).toMatchSnapshot();
  });
});
