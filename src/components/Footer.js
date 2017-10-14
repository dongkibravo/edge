import React, {Component} from 'react';

import '../styles/css/Footer.css';
import FooterLink from './Footer.link';
import FooterSubscribe from './Footer.subscribe';
import FooterManual from './Footer.manual';

class Footer extends Component {
  render() {
    return (
      <section id="footer">
        <div className="container">
          <FooterLink/>
          <FooterSubscribe/>
          <br/>
          <br/>
          <br/>
          <hr/>
          <FooterManual/>
        </div>
      </section>
    );
  }
}

export default Footer;
