import React from 'react';
import logo from './logo.svg';

import useStyles from "./styles/index"
import Title from './components/Title'
import Comparison from "./components/Comparison"



function App() {
  let classes = useStyles();
  return (
    <div className={classes.root}>
        <Title />
        <Comparison/>
    </div>
  );
}

export default App;
