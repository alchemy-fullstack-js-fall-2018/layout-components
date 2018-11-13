import Section from './Section';

describe('Section Component', () => {

  it('should be a section', () =>{
    const section = new Section({
      sectionTitles: ['About', 'Portfolio', 'Blog', 'Contact']
    });
    expect(section.render()).toMatchSnapshot();
  });
});
