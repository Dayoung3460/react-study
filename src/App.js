import logo from './logo.svg';
import './App.css';
import LifeCycleSample from "./MyComponent/LifeCycleSample";
import {Component, useState} from "react";
import ErrorBoundary from "./MyComponent/ErrorBoundary";
import Counter from "./MyComponent/Counter";
import Info from "./MyComponent/Info";
import Average from "./MyComponent/Average";
import SassComponent from "./MyComponent/SassComponent";
import CSSModule from "./MyComponent/CSSModule";

const App = () => {
  // const [visible, setVisible] = useState(false)
  return (
    <div>
      <CSSModule/>
    </div>
  )
}
export default App;
