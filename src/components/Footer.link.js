import React, {Component} from 'react';

import Rogo1 from '../static/follow-48.png';
import Rogo2 from '../static/follow-49.png';
import Rogo3 from '../static/follow-50.png';
import Rogo4 from '../static/follow-51.png';

class FooterLink extends Component {
  render() {
    return (
      <div className="col-md-4 col-xs-12 text-center">
        <ul className="social_box">
          <li>
            <a target="_blank" rel="noopener noreferrer"
              href="https://www.facebook.com/musioAKA/?ref=ts&fref=ts">
              <img src={Rogo1} alt="goto facebook" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer"
             href="https://www.instagram.com/musio_aka/">
             <img src={Rogo2} alt="goto instagram" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer"
              href="https://twitter.com/Musio_AKA">
              <img src={Rogo3} alt="goto twitter" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer"
             href="https://www.youtube.com/channel/UCHXmMzxX7cMVPaLihhcTGLA">
             <img src={Rogo4} alt="goto channel" />
           </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default FooterLink;
