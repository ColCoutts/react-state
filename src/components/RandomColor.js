import React, { PureComponent } from 'react';
// import styles from './RandomColor.css';

export default class RandomColor extends PureComponent {
  state = {
    color: '',
    starter: new Date(),
    img: ''
  }
  
  randomHex = () => {
    const colorHex = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return colorHex;
  }

  componentDidMount() {
    this.starterTime = setInterval(() => {
      this.setState({ color: this.randomHex(), starter: new Date(), img: '' });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState === this.state.color) {
      this.setState({ img: 'https://thumbs.gfycat.com/DemandingWelltodoGallinule-poster.jpg' });
    }
  }

  componentWillUnmount() {
    this.starterTime && clearInterval(this.starterTime);
  }

  render() {
    const { color } = this.state;
    const styles = {
      background: color,
      width: '40em',
      height: '40em'
    };

    return <div style={styles}></div>;
  }
}

// export default function RandomColor() {
//   const colorHex = '#' + Math.floor(Math.random() * 16777215).toString(16);
//   return colorHex;
// }
