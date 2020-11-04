import React from 'react'


class Form3 extends React.Component {
    constructor() {
        super();
        this.state = {
            credit: "",
            date: "",
        };
    };



    render() {
        return (
            <form id="form1">
                <label for="name">credit card Number:</label><br></br>
                <input type="text" id="credit" name="credit" /><br></br><br></br>
                <label for="expiry date">expiry date:</label><br></br>
                <input type="date" id="date" name="date" /><br></br><br></br>
                <button id="submit">submit</button>
            </form>
        )
    }
}

export default Form3;