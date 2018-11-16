import Component from '../Component/Component';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Section from '../Section/Section';

import styles from './App.css';

import { teams } from '../../data/teams';

export default class App extends Component {

  render() {

    const header = new Header();
    const footer = new Footer();
    const section = new Section({ teams });


    return `
      <main id="${styles.main}">
        ${header.render()}
        ${section.render()}
        ${footer.render()}
      </main>
    `;

  }


}
