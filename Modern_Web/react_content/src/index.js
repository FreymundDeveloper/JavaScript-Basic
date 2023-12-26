import React from 'react';
import ReactDOM from 'react-dom';

//import First from './components/First';
//import Hello from './components/GoodDay';
import Mult from './components/Multiple'

ReactDOM.render(
    <React.Fragment>
        <Mult.Hi name={"Dev"} />
        <Mult.Bye name={"Programer"} />
    </React.Fragment>
, document.getElementById('root'));