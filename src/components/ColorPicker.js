import React, { PureComponent } from 'react';
import styles from './ColorPicker.css';

export default class ColorPicker extends PureComponent {
  state = {
    color: ''
  };

  handleClickColor = color => {
    this.setState({ color });
  }

  render() {
    const { color } = this.state;

    return (
      <section className={styles.ColorPicker}>
        <button className={styles.red} onClick={() => this.handleClickColor('red')}>RED</button>
        <button className={styles.green} onClick={() => this.handleClickColor('green')}>GREEN</button>
        <button className={styles.blue} onClick={() => this.handleClickColor('blue')}>BLUE</button>
        <div className={styles[color]}></div>
      </section>
    );
  }
}
