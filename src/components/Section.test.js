import Section from './Section';



describe('Section Component', () => {
  it('is a section', () => {
    const children = [];

    const section = new Section({ children });

    expect(section.render()).toMatchSnapshot();
  });
});
