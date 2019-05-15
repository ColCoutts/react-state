import React from 'react';
import RandomColor from './RandomColor';

export default function App() {
  return <RandomColor />;
}

// export default class App extends PureComponent {
//   state = {
//     color: '',
//     starter: new Date(),
//     img: ''
//   }

//   componentDidMount() {
//     this.starterTime = setInterval(() => {
//       this.setState({ color: this.randomHex(), starter: new Date(), img: '' });
//     }, 1000);
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if(prevState === this.state.color) {
//       this.setState({ img: 'https://thumbs.gfycat.com/DemandingWelltodoGallinule-poster.jpg' });
//     }
//   }

//   componentWillUnmount() {
//     this.starterTime && clearInterval(this.starterTime);
//   }

//   render() {
//     const { color } = this.state;
//     const styles = {
//       background: color,
//       width: '40em',
//       height: '40em'
//     };

//     return <RandomColor style={styles} />;
//   }

// }
