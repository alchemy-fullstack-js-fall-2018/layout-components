import Component from './Component';

export default class Section extends Component {
  render() {
    const children = this.props.children.map(child  => {
      return child.render();
    });



    return `
      <section>
        <div>
          ${children}
        </div>
      </section>
    `;
  }
}
