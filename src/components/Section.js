import Component from './Component';

export default class Section extends Component {
  render() {
    const content = this.props.content;

    return `
      <section>${content}</section>
    `;
  }
}
