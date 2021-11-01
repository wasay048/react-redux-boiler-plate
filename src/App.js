import React, { useEffect } from "react";
import { useDispatch, connect } from 'react-redux'
import {startApplication} from './actions/startAction';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startApplication("Application Started"))
  });
  return (
    <div className="App">
      <h1>React Redux Starter</h1>
    </div>
  );
}

export default connect()(App);
