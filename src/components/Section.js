import Component from './Component';
import styles from './Section.css';

export default class Section extends Component {
  render() {
    const sectionTitle = this.props.sectionTitle.map(title => {
      return `<h1>${title}</h1>`;
    });

    return `
    <section>
      <div>${sectionTitle.join(' ')}</div>
    </section>
    `;
  }
}
