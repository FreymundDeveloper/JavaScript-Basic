import React from 'react'; // Current versions do not require this import
import ReactDOM from 'react-dom/client';

//import First from './components/First';
//import Hello from './components/GoodDay';
//import Mult from './components/Multiple'
//import Welcome from './components/Welcome';
import Dad from './components/Dad';
import Son from './components/Son';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
        {/*<Mult.Hi name={"Dev"} />
        <Mult.Bye name={"Programer"} />

        <Welcome type={"Hi"} name={"Dev"} />*/}

        <Dad firstname={"Josh"} lastname={"Smith"}>
            <Son firstname={"Alan"} />
            <Son firstname={"Dexter"} />
        </Dad>
    </React.Fragment>
);