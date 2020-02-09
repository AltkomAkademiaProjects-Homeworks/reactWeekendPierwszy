import React from 'react';


export default class Parent extends React.Component {
    render() {
        const authorInfo = {name: "Piotr", surname: "Magusiak"};
        return (
                <NestedInParent display={authorInfo}/>
        );
    }
}

class NestedInParent extends React.Component {
    render() {
        return (
            <LowestChild displayToLowest={this.props.display}/>
        );
    }
}


class LowestChild extends React.Component {
    render() {
        return (
            <p>Imię: {this.props.displayToLowest.name}, Nazwisko: {this.props.displayToLowest.surname}</p>
        );
    }
}

