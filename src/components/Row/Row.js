import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './Row.css';

class Row extends Component {

  render() {

    return (
        <div styleName='row'>
        	{this.props.children}
        </div>
    );
  }
};

export default CSSModules(Row, styles);
