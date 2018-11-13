import Component from './Component';
import Header from './Header';
import Footer from './Footer';
import Section from './Section';

import styles from './App.css';
export default class App extends Component {

  render() {

    const teams = [
      {
        name: 'Raiders',
        story: 'They are doing really terribly. I blame Gruden.'
      },
      {
        name: 'Patriots',
        story: 'It\'s incredible how they continue to have success, year after year.'
      },
    ];

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
