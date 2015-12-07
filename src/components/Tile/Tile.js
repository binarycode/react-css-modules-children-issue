import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './Tile.css';

class Tile extends Component {

  constructor (props, context) {
    super(props, context);
    this.state = {};
  }

  render() {

    return (
      <div className={styles.tile}>
          <div className={styles.content}>
            {this.props.children}
          </div>
      </div>
    );
  }
};

export default CSSModules(Tile, styles, {allowMultiple: true});
