import React, { Component } from 'react';

class Output extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: props.value
        }
    }
    render() {
        return (
            <div className="output">
                <h1>Output Component</h1>
                {this.props.value}
            </div>
        );
    }
}

export default Output;