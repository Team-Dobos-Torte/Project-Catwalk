import React from 'react';
import Justin from './justin';
import Dylan from './Dylan.jsx';

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
        <Justin />
        <h1>Hello {this.state.name}</h1>
        <Dylan name={this.state.name} />
      </>
    );
  }
}

export default Main;
