import React, {Component} from 'react';

class EventPractice extends Component {
  state = {
    message: '',
    username: ''
  }

  handleChange = (e) => {
    const name = 'variantKey'
    const object = {
      [name]: 'value'
    }
    console.log(object)


    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message)
    this.setState({
      message: '',
      username: ''
    })
  }


  render() {
    return (
      <div>
        <p>event practice</p>
        <input
          type="text"
          name="username"
          placeholder="user name"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="Enter anything"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>check</button>
      </div>
    );
  }
}

export default EventPractice;
