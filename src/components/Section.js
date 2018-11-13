import Component from './Component';
import styles from './Section.css';

export default class Section extends Component {
  render() {
    const children = this.props.children.map(child => child.render());

    return `
      <section class="${styles.section}">${children}</section>
    `;
  }
}
