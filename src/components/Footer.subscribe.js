import React, {Component} from 'react';

class FooterSubscribe extends Component {
  render() {
    return (
      <div className="col-md-4 col-md-offset-4 col-xs-12 text-cetner">
        <div className="input-group">
          <input id="email" name="email" type="text" className="form-control" placeholder="Email address"/>
          <span className="input-group-btn">
            <button id="subscribe">SUBSCRIBE</button>
          </span>
        </div>
      </div>
    );
  }
}

export default FooterSubscribe;
