import Component from './Component';

export default class Header extends Component {
  render() {
    const links = this.props.links.map(link => {
      return `<a href="/${link}">${link}</a>`;
    });

    return `
      <header>
        <nav>
          ${links.join(' ')}
        </nav>
      </header>`;
  }
}
