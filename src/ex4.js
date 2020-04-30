import React from "react";

export default class LifecycleTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextState.counter < 11
    }
    

    myFunction = (event) => {
        this.setState({counter: this.state.counter + 1})
    }

    render() {
        return (
            <div>
                <p>Counter: {this.state.counter}</p>
                <ButtonHandler myFunction={this.myFunction}/>
            </div>
        )
    }
}

class ButtonHandler extends React.Component {
    render() {
        return (
            <button onClick={this.props.myFunction}>Dodaj!</button>

        )
    }
}