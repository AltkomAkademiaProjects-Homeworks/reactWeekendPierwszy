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

        if (name.length < 3 || surname.length < 3) {
            alert("Your name or surname is too short!")
        }

        if (!name.charAt(0).match(/^[A-Z]*$/) || !surname.charAt(0).match(/^[A-Z]*$/)) {
            alert("Your name and surname must start with capital letter!")
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