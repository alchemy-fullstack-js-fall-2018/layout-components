import Component from './Component';

export default class Image extends Component {
  render() {
    const content = this.props.content;

    return `
      <img src="./src/assets/${content}"/>
    `;
  }
}
