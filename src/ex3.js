import React from "react";

export default class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val1: null,
            val2: null
        }

        mySubmitHandler = (event) => {
            event.preventDefault();
            let val1 = this.state.val1;
            let val2 = this.state.val2;
            let sum = val1 + val2;
            alert("The sum of a numbers is: "[sum])
        }

        return (
            <Calc properFunction={this.mySubmitHandler}/>
        )
    }
}

class Calc extends React.Component {

    myChangeHandler = (event) => {
        let key = event.target.name;
        let val = event.target.value;
        this.setState({[key]: val});
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        let val1 = this.state.val1;
        let val2 = this.state.val2;
        let sum = val1 + val2;
        alert("The sum of a numbers is: "[sum])
    }


    render() {
        return (

            <form onSubmit={this.mySubmitHandler}>
                <p>Enter first number:</p>
                <input
                    type='text'
                    name='val1'
                    onChange={this.myChangeHandler}
                />
                <p>Enter second number:</p>
                <input
                    type='text'
                    name='val2'
                    onChange={this.myChangeHandler}
                />
                <br/>
                <br/>
                <input type='submit' value="Check the sum of a numbers"/>
            </form>
        )
    }
}

/*
export default class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number = 0
        };
    }

    showPrompt = () => {
        var value = prompt("Podaj liczbę");
        let tempVal = this.state.number + parseInt(value);
        this.setState({number: tempVal})
    }

    render() {
        return (
            <div>
                <button onClick={this.this.showPrompt}>Wprowadz liczbę</button>
                <p>Wynik: {this.state.number}</p>
            </div>
        )
    }
}
*/


