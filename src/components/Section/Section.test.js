import Section from './Section';

describe('Section Component', () => {
  it('should be a section', () => {

    const teams = [
      {
        name: 'Raiders',
        story: 'They are doing really terribly. I blame Gruden.'
      },
      {
        name: 'Patriots',
        story: 'It\'s incredible how they continue to have success, year after year.'
      }
    ];

    const section = new Section({ teams });

    expect(section.render()).toMatchSnapshot();
  });
});
