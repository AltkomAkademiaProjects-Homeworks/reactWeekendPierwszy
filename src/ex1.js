import React from 'react';

export default class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            surname:"",
            age: null,
            sex: ""
        }
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        let age = this.state.age;
        let sex = this.state.sex;
        let name = this.state.name;
        let surname = this.state.surname

        if (!Number(age)) {
            alert("Your age must be a number!");
        }

        if (sex !== "m" && sex !== "k") {
            alert("You did not specify your sex!");
        }


    }
    myChangeHandler = (event) => {
        let key = event.target.name;
        let val = event.target.value;
        this.setState({[key]: val});
    }

    render() {
        return (
            <form onSubmit={this.mySubmitHandler}>
                <h1>Hello {this.state.name}</h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    name='name'
                    onChange={this.myChangeHandler}
                />
                <p>Enter your surname:</p>
                <input
                    type='text'
                    name='surname'
                    onChange={this.myChangeHandler}
                />
                <p>Enter your age:</p>
                <input
                    type='text'
                    name='age'
                    onChange={this.myChangeHandler}
                />
                <p>Enter your sex:</p>
                <input
                    type='text'
                    name='sex'
                    onChange={this.myChangeHandler}
                />
                <br/>
                <br/>
                <input type='submit' value="Sprawdź"/>
            </form>
        );
    }
}