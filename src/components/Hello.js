import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idSync: 10
    }
  }
  static getDerivedStateFromProps(props, state) {
    const { id } = props;
    if (id > 10) {
      props.testEvent && props.testEvent();
    }
    return id > 5 ? { idSync: id } : null;
  }
  render() {
    const { id } = this.props;
    const { idSync } = this.state;
    return (
      <div style={{ padding: 20 }}>
        <p>我是 组件 </p>
        <p>我通过 prpos 改变我的状态</p>
        <p>props-{id}  内部 state： {idSync}</p>
      </div>
    )
  }
}

Hello.propTypes = {
  id: PropTypes.number,
  testEvent: PropTypes.func
}

Hello.defaultProps = {
  id: 0
}
