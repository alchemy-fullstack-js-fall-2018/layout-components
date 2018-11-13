import Component from './Component';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import styles from './App.css';

export default class App extends Component {
  render() {

    const header = new Header({
      links: ['About', 'Portfolio', 'Blog']
    });

    const aboutSection = new Section({
      sections: [{
        title: 'About',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan ultricies laoreet. Sed eget ultrices lacus, et faucibus diam. Nullam mattis placerat lorem, in volutpat leo dignissim in. Nulla in ullamcorper sapien. Suspendisse potenti. In arcu lorem, iaculis vel risus sed, sagittis placerat nibh. Ut facilisis neque ac lacus posuere maximus. Sed mollis dictum felis, at maximus urna rhoncus vitae. Pellentesque lobortis, odio at varius finibus, nulla libero tempor neque, vel pretium urna tortor quis nisl. Ut laoreet iaculis lacus. Sed justo magna, posuere eget tellus sed, dapibus mattis neque. Mauris commodo, nibh mattis bibendum iaculis, orci justo sollicitudin lectus, eu porta quam sem a neque.'
      }]
    });

    const portfolioSection = new Section ({
      sections: [{
        title: 'Portfolio',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan ultricies laoreet. Sed eget ultrices lacus, et faucibus diam. Nullam mattis placerat lorem, in volutpat leo dignissim in. Nulla in ullamcorper sapien. Suspendisse potenti. In arcu lorem, iaculis vel risus sed, sagittis placerat nibh. Ut facilisis neque ac lacus posuere maximus. Sed mollis dictum felis, at maximus urna rhoncus vitae. Pellentesque lobortis, odio at varius finibus, nulla libero tempor neque, vel pretium urna tortor quis nisl. Ut laoreet iaculis lacus. Sed justo magna, posuere eget tellus sed, dapibus mattis neque. Mauris commodo, nibh mattis bibendum iaculis, orci justo sollicitudin lectus, eu porta quam sem a neque.'
      }]
    });

    const blogSection = new Section({
      sections: [{
        title: 'Blog',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan ultricies laoreet. Sed eget ultrices lacus, et faucibus diam. Nullam mattis placerat lorem, in volutpat leo dignissim in. Nulla in ullamcorper sapien. Suspendisse potenti. In arcu lorem, iaculis vel risus sed, sagittis placerat nibh. Ut facilisis neque ac lacus posuere maximus. Sed mollis dictum felis, at maximus urna rhoncus vitae. Pellentesque lobortis, odio at varius finibus, nulla libero tempor neque, vel pretium urna tortor quis nisl. Ut laoreet iaculis lacus. Sed justo magna, posuere eget tellus sed, dapibus mattis neque. Mauris commodo, nibh mattis bibendum iaculis, orci justo sollicitudin lectus, eu porta quam sem a neque.'
      }]
    });

    const footer = new Footer({
      contactIcons: [
        { class: 'far fa-envelope', id: 'gmail' },
        { class:'fab fa-linkedin-in', id: 'linkedin' },
        { class: 'fab fa-github', id: 'github' }]
    });

    return `
    ${header.render()}
    <div class="${styles.info}">
      ${aboutSection.render()}
      ${blogSection.render()}
      </div>
    ${portfolioSection.render()}
    ${footer.render()}
    `;
  }
}
