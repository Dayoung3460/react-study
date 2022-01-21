import React, {Component} from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  }

  myRef = null

  constructor(props) {
    super(props);
    console.log('constructor')
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps')
    if(nextProps.color !== prevState.color) {
      return { color: nextProps.color }
    }
    return null
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate', nextProps, nextState)
    return nextState.number % 10 !== 4
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate')
    if(prevProps.color !== this.props.color) {
      return this.myRef.style.color
    }
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate')
    if(snapshot) {
      console.log('color before updated: ' + snapshot)
    }
  }

  render() {
    console.log('render')

    const style = {
      color: this.props.color
    }

    return (
      <div>
        <h1 style={style} ref={ref => this.myRef = ref}>
          {this.state.number}
        </h1>
        <p>
          color: {this.state.color}
        </p>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default LifeCycleSample;
