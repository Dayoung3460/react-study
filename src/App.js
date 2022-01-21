import logo from './logo.svg';
import './App.css';
import LifeCycleSample from "./MyComponent/LifeCycleSample";
import {Component} from "react";
import ErrorBoundary from "./MyComponent/ErrorBoundary";
import Counter from "./MyComponent/Counter";

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

class App extends Component{


  render() {
    return (
        <Counter/>
    )
  }
}

export default App;
