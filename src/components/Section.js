import Component from './Component';

export default class Section extends Component {
  render() {
    const images = this.props.images.map(({ image }) => {
      return `<img src="${image}">`;
    });

    return `
      <main>
        <div>
          ${images.join(' ')}
        </div>
      </main>
    `;
  }
}
