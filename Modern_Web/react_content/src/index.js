import React from 'react';
import ReactDOM from 'react-dom/client';

//import First from './components/First';
//import Hello from './components/GoodDay';
//import Mult from './components/Multiple'
import Welcome from './components/Welcome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
        {/*<Mult.Hi name={"Dev"} />
        <Mult.Bye name={"Programer"} />*/}

        <Welcome type={"Hi"} name={"Dev"} />
    </React.Fragment>
);