import logo from './logo.svg';
import './App.css';
import LifeCycleSample from "./MyComponent/LifeCycleSample";
import {Component, useState} from "react";
import ErrorBoundary from "./MyComponent/ErrorBoundary";
import Counter from "./MyComponent/Counter";
import Info from "./MyComponent/Info";
import Average from "./MyComponent/Average";

const App = () => {
  // const [visible, setVisible] = useState(false)
  return (
    <div>
      <Average/>
    </div>
  )
}
export default App;
