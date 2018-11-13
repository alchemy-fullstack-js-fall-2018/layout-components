import Section from './Section';

describe('Section Component', () => {

  it('should be a section', () =>{
    const section = new Section({
      sections: [{
        title: 'Portfolio',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan ultricies laoreet. Sed eget ultrices lacus, et faucibus diam. Nullam mattis placerat lorem, in volutpat leo dignissim in. Nulla in ullamcorper sapien. Suspendisse potenti. In arcu lorem, iaculis vel risus sed, sagittis placerat nibh. Ut facilisis neque ac lacus posuere maximus. Sed mollis dictum felis, at maximus urna rhoncus vitae. Pellentesque lobortis, odio at varius finibus, nulla libero tempor neque, vel pretium urna tortor quis nisl. Ut laoreet iaculis lacus. Sed justo magna, posuere eget tellus sed, dapibus mattis neque. Mauris commodo, nibh mattis bibendum iaculis, orci justo sollicitudin lectus, eu porta quam sem a neque.'
      }]
    });
    expect(section.render()).toMatchSnapshot();
  });
});
