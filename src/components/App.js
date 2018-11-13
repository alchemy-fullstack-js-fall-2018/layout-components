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
  }
}
// **SECTIONS AND FOOTER:**

//   render() {
//     // **Section**
//     const sectionOne = new Section({
//     //   links: ['about', 'blog', 'contact']
//     });
    
//     return `
//     ${section.render()}
//     <h1>${this.props.message}</h1>
//     `;
//   }
//   render() {
//     // **Section**
//     const sectionTwo = new Section({
//     //   links: ['about', 'blog', 'contact']
//     });
    
//     return `
//     ${section.render()}
//     <h1>${this.props.message}</h1>
//     `;
//   }
//   render() {
//     // **Footer**
//     const footer = new Footer({
//     //   links: ['about', 'blog', 'contact']
//     });
    
//     return `
//     ${footer.render()}
//     <h1>${this.props.message}</h1>
//     `;
//   }
