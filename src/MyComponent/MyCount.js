import React, {Component} from 'react';

class MyCount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
      fixedNumber: 0
    }
  }

  render() {
    const {number, fixedNumber} = this.state

    return (
      <div>
        {number}<br/>
        {fixedNumber}
        <button onClick={() => {
          this.setState({number: number + 1},
            () => {
            console.log('callback')
            })

        }}>+1</button>
      </div>
    );
  }
}

export default MyCount;

