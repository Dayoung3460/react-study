import logo from './logo.svg';
import './App.css';
import LifeCycleSample from "./MyComponent/LifeCycleSample";
import {Component, useState} from "react";
import ErrorBoundary from "./MyComponent/ErrorBoundary";
import Counter from "./MyComponent/Counter";
import Info from "./MyComponent/Info";

const App = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible)
        }}
      >
        { visible ? 'hide' : 'show' }
      </button>
      <hr/>
      { visible && <Info/> }
    </div>
  )
}
export default App;
