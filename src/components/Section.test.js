import Section from './Section';
import Image from './Image';

describe('Section Component', () => {
  it('has finalized scaffolding/styling', () => {
    const section = new Section({
      children: [
        new Image({
          images: ['dummy2.jpg', 'dummy1.jpg', 'dummy3.png']
        })
      ]
    });
    expect(section.render()).toMatchSnapshot();
  });
});
