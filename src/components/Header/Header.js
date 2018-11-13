import Component from '../Component/Component';

import styles from './Header.css';
export default class Header extends Component {

  render() {

    return `
      <header class="${styles.header}">
        <h1>Football Teams</h1>
      </header>
    `;
  }


}
