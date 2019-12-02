import React from 'react';

export default class ErrorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0
    }
  }
  hello = () => {
    let id = this.state.id;
    this.setState({
      id: ++id
    })
  }
  render() {
    const { id } = this.state;
    return (
      <div className="App">
        <h1>404</h1>
        <div onClick={this.hello}>404 改变状态{id}</div>
      </div>
    );
  }
}
