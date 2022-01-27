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
import StyledComponent from "./MyComponent/StyledComponent";
import UseReducer from "./MyComponent/UseReducer";


const App = () => {
  // const [visible, setVisible] = useState(false)
  return (
    <div>
      <UseReducer></UseReducer>
    </div>
  )
}
export default App;
