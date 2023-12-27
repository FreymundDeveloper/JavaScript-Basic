import React, { Component } from "react";

export default class Welcome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: "Word",
            name: this.props.name
        }

        this.setType = this.setType.bind(this);
        this.setName = this.setName.bind(this);
    }

    setType(element) {
        this.setState({ type: element.target.value });
    }

    setName(element) {
        this.setState({ name: element.target.value });
    }

    render() {
        const { type, name } = this.state;
        return (
            <React.Fragment>
                <h1>{type} {name}</h1>
                <hr />
                <input type="text" placeholder="Type..." value={type} onChange={this.setType} />{/*Input tags need a state change call*/}
                <input type="text" placeholder="Name..." value={name} onChange={this.setName}  />
            </React.Fragment>
        );
    }
}