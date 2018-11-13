import Component from './Component';
import styles from './Services.css';

export default class Services extends Component {
  render() {
    const servicesSection = `
    <div id="services">
    <h3>Services</h3>
    <p>${this.props.service}</p> </div>`;

    return `<section class="${styles.services}">
      ${servicesSection}
    </section>`;
  }
}
