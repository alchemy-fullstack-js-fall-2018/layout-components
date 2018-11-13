import Footer from './Footer';

describe('Footer Component', () => {

  it('should be a footer', () => {
    const footer = new Footer({
      contactIcons: [
        { class: 'far fa-envelope', id: 'gmail' },
        { class:'fab fa-linkedin-in', id: 'linkedin' },
        { class: 'fab fa-github', id: 'github' }]
    });
    expect(footer.render()).toMatchSnapshot();
  });
});
