import React from "react";
//import Son from "./Son";
import { childrenWithProps } from "../utils/utils";

export default props =>
    <div>
        <h1>{props.firstname} {props.lastname}</h1>
        <h2>Sons</h2>
        <ul>
            {/*<Son firstname={"Earl"} lastname={props.lastname} />
            <Son {...props} firstname={"John"} />*/}

            {childrenWithProps(props)}
        </ul>
    </div>