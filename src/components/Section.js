import Component from './Component';
import styles from './Section.css';

export default class Section extends Component {
  render() {
    const content = this.props.content;

    return `
      <section class="${styles.section}">${content}</section>
    `;
  }
}
