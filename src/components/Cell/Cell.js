import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './Cell.css';
import Row from '../Row/Row';

class Cell extends Component {

  render() {
    
    return (
      	<div styleName='cell'>I am just a cell</div>
    );
  }
};

export default CSSModules(Cell, styles)
