import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './Tile.css';

class Tile extends Component {

  render() {

    return (
      <div styleName='tile'>
        {this.props.children}
      </div>
    );
  }
};

export default CSSModules(Tile, styles, {allowMultiple: true});
