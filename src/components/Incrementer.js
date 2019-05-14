import React, { PureComponent } from 'react';
import styles from './Incrementer.css';

export default class Incrementer extends PureComponent {
  state = {
    click: 0
  }

  handleClick = () => {
    this.setState(state => {
      return {
        click: state.click + 1
      };
    });
  }

  render() {
    return (
      <div className={styles.incrementer}>
        <div className={styles.number}>{this.state.click}</div>
        <button onClick={this.handleClick}>UPDATE NUMBUHR</button>
      </div>
    );
  }

}
