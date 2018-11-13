import Component from './Component';
import Header from './Header';

export default class App extends Component {
  render() {
    const header = new Header({
      links: ['About', 'Unnecessary Fun Facts', 'Dog Photos']
    });

    return `
    ${header.render()}
    `;
  }
}
