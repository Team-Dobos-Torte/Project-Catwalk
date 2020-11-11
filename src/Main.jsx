import React from 'react';
import QAmodule from './QAmodule';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
  }
  render() {
    return (
      <>
        <h1>Hello {this.state.name}</h1>
        <QAmodule />
      </>
    );
  }
}

export default Main;
