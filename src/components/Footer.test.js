import Footer from './Footer';
import styles from './Footer.css';

describe('Footer Component', () => {

  it('should be a footer', () => {
    const footer = new Footer({
      ccontactIcons: [
        { class: 'far fa-envelope', id: 'gmail' },
        { class:'fab fa-linkedin-in', id: 'linkedin' },
        { class: 'fab fa-github', id: 'github' }]
    });
    expect(footer.render()).toMatchSnapshot();
  });
})