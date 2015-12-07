import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './PictureTile.css';
import Tile from '../Tile/Tile';

class PictureTile extends Component {

  render() {

    return (
    	<Tile>
        <span className={styles.name}>
          I am a picture tile...
        </span>
    	</Tile>
    );
  }
};

export default CSSModules(PictureTile, styles, {allowMultiple: true});

/* 

<span className={styles.name}> 

works fine... 
strangely though 

<span styleName='name'>

does not
*/
