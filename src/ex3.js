import React from "react";

export default class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val1: null,
            val2: null 
        }
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        let actVal1 = this.state.val1;
        let actVal2 = this.state.val2;
        let sum = parseInt(actVal1) + parseInt(actVal2);
        alert("The sum of a numbers is: " + sum)
    }

    myChangeHandler = (event) => {
        let key = event.target.name;
        let val = event.target.value;
        this.setState({[key]: val});
    }

    render() {
        return (
            <Calc properFunction={this.mySubmitHandler} propFunction={this.myChangeHandler}/>
        )
    }


}

 class Calc extends React.Component {

    


    render() {
        return (

            <form onSubmit={this.props.properFunction}>
                <p>Enter first number:</p>
                <input
                    type='text'
                    name='val1'
                    onChange={this.props.propFunction}
                />
                <p>Enter second number:</p>
                <input
                    type='text'
                    name='val2'
                    onChange={this.props.propFunction}
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


