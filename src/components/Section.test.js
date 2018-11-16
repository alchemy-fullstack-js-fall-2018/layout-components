import Section from './Section';

describe('Section Component', () => {
  it('should be a section', () => {
    const section = new Section({
      links: ['about']
    });

    expect(section.render()).toMatchSnapshot();
  });
});
