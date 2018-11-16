import Component from './Component';
import Header from './Header';
// import Section from './Section';
// import Footer from './Footer';

export default class App extends Component {
  render() {
    //   Header
    const header = new Header({
      links: ['about', 'blog', 'contact']
    });
    
    return `
    ${header.render()}
    <h1>${this.props.message}</h1>
    `;
  };
}
  render() {
    const sectionOne = new Section({
    });
    
    return `
    ${section.render()}
    <h1>${this.props.message}</h1>
    `;
  };

