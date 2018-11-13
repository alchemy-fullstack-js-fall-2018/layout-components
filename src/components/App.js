import Component from './Component';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

export default class App extends Component {
  render() {

    return `
      <h1>${this.props.message}</h1>
    `;
  }
}
