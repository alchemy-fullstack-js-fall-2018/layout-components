import Component from './Component';
import Header from './Header';

export default class App extends Component {
  render() {
    const header = new Header({
      links: ['about', 'contact', 'projects', 'services']
    });
    return `${header.render()} <h1>${this.props.message}</h1>`;
  }
}
