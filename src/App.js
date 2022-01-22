import logo from './logo.svg';
import './App.css';
import LifeCycleSample from "./MyComponent/LifeCycleSample";
import {Component, useState} from "react";
import ErrorBoundary from "./MyComponent/ErrorBoundary";
import Counter from "./MyComponent/Counter";
import Info from "./MyComponent/Info";
import Average from "./MyComponent/Average";
import SassComponent from "./MyComponent/SassComponent";

const App = () => {
  // const [visible, setVisible] = useState(false)
  return (
    <div>
      <SassComponent/>
    </div>
  )
}
export default App;
