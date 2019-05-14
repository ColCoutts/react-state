import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';

function ColorPicker({ selectColorHandler }) {
  return (
    <div className={styles.ColorPicker}>
      <button className={styles.red} onClick={() => this.selectColorHandler()}>RED</button>
      <button className={styles.green} onClick={() => this.selectColorHandler()}>GREEN</button>
      <button className={styles.blue} onClick={() => this.selectColorHandler()}>BLUE</button>
    </div>
  );
}

ColorPicker.propTypes = {
  selectColorHandler: PropTypes.func.isRequired
};

export default ColorPicker;
