import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';

function ColorPicker({ selectColorHandler }) {
  return (
    <section className={styles.ColorPicker}>
      <button className={styles.red} onClick={() => selectColorHandler('red')}>RED</button>
      <button className={styles.green} onClick={() => selectColorHandler('green')}>GREEN</button>
      <button className={styles.blue} onClick={() => selectColorHandler('blue')}>BLUE</button>
    </section>
  );
}

ColorPicker.propTypes = {
  selectColorHandler: PropTypes.func.isRequired
};

export default ColorPicker;
