import Section from './Section';


describe('Section Component', () => {
  it('is a section', () => {
    const images = [
      {
        image: 'http://en.bcdn.biz/Images/2018/6/6/6483b0a6-667e-4209-9b66-5b4bce6b4e53.jpg'
      }
    ];

    const section = new Section({ images });

    expect(section.render()).toMatchSnapshot();
  });
});
