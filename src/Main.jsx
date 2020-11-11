import React from 'react';

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
      </>
    );
  }
}

export default Main;
