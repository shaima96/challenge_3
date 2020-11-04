import React from 'react'


class Form2 extends React.Component {
    constructor() {
        super();
        this.state = {
            line1: "",
            line2: "",
            city: "",
            state: "",
            code: ""
        };
    };



    render() {
        return (
            <form id="form1">
                <label for="line1">line 1:</label><br></br>
                <input type="text" id="line1" name="line1" /><br></br>
                <label for="line2">line 2:</label><br></br>
                <input type="text" id="line2" name="line2" /><br></br>
                <label for="city">city:</label><br></br>
                <input type="text" id="city" name="city" /><br></br>
                <label for="state">state:</label><br></br>
                <input type="text" id="state" name="state" /><br></br>
                <label for="code">code:</label><br></br>
                <input type="text" id="code" name="code" /><br></br>
                <button id="next">Next</button>
            </form>
        )
    }
}

export default Form2;