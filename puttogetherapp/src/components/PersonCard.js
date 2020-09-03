import React from "react";


class PersonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            age: props.age
        }
    }

    clickHandler = event => {
        this.setState({
            age: this.state.age + 1
        })
    }
   
    render() {
        const {firstName, lastName, age, hairColor} = this.props;
        return (
            <div>
                <h1>{ lastName }, { firstName }</h1>
                <p>Age: { this.state.age }</p>
                <p>Hair Color: { hairColor }</p>
                <button onClick={this.clickHandler}>
                    Birthday Button for { lastName }, { firstName }
                </button>
            </div>
        )
    }

}
export default PersonCard