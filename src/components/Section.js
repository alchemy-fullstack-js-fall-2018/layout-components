import Component from './Component';
import styles from './Section.css';

export default class Section extends Component {
  render() {
    const sectionTitles = this.props.sectionTitles.map(title => {
      return `<h1>${title}</h1>`;
    });

    return `
    <section>
      <div>${sectionTitles.join(' ')}</div>
    </section>
    `;
  }
}
