import Component from '../Component/Component';

import styles from './Footer.css';
export default class Footer extends Component {

  render() {

    return `
      <footer class="${styles.footer}">
        <p>Made to entertain - 2018</p>
      </footer>
    `;
  }


}
