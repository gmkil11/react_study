import { Component } from 'react';

class MainTitle extends Component {
  printInfo(msg) {
    console.log('MainTitle', msg);
  }
  render() {
    const { childeren } = this.props;
    return childeren;
  }
}

export default MainTitle;
