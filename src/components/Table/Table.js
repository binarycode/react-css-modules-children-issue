import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './Table.css';

class Table extends Component {

  render() {

    return (
      <div styleName='table'>
      	{this.props.children}
      </div>
    );
  }
};

export default CSSModules(Table, styles);
