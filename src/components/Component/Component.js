export default class Component {
  constructor(props) {
    this.props = props;
  }

  render() {
    throw Error('You forgot to create a render method');
  }

  attach(node) {
    node.innerHTML = this.render();
  }
}
