import logo from './logo.svg';
import './App.css';
import ScrollBox from "./MyComponent/ScrollBox";
import {Component} from "react";

class App extends Component{
  render() {
    return (
      <>
        <ScrollBox ref={ref => this.scrollBox = ref}/>
        <button onClick={() => this.scrollBox.scrollToBottom()}>Go Bottom</button>
      </>
    )
  }
}

export default App;
