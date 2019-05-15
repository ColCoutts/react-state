import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';

function ColorDisplay({ color }) {
  return (
    <div className={styles.ColorDisplay} style={{ backgroundColor: color }}></div>
  );
}

ColorDisplay.propTypes = {
  color: PropTypes.string.isRequired
};

export default ColorDisplay;
