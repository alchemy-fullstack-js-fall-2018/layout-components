import Component from './Component';
import Header from './Header';
import Footer from './Footer';
import styles from './App.css';

export default class App extends Component {

  render() {
    const header = new Header({
      links: ['about', 'contact', 'projects', 'services']
    })

    const footer = new Footer({
      footerContent: ['Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quasi consequuntur veniam, eaque numquam sint tenetur velit in, voluptas quisquam eos! Possimus adipisci natus obcaecati inventore quaerat facilis enim similique']
    })



    return `
      ${header.render()}
      <h1 class="${styles.main}">${this.props.message}</h1>
      ${footer.render()}

      `;

  }
}
