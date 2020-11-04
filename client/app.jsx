
// import Form1 from './form1.jsx';
// import Form2 from './form2.jsx';
// import Form3 from './form3.jsx';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            index: 0,
            name: "",
            email: "",
            password: "",
            line1: "",
            line2: "",
            city: "",
            state: "",
            code: "",
            credit: "",
            date: "",
        }
        $.ajax({
            url: 'http://localhost:4001/',
            type: 'POST',
            contentType: 'application/json',
            data: this.setState,
            success: function (result) {
                console.log(result);
            }
        });
    }
    render() {
        return (
            <div>

                {
                    <form>

                        <h1> Multistep Checkout Experience</h1>
                        <button onClick={() => this.setState({ indexL: 1 })}>Checkout</button>
                        <div>
                            <h2>First Form:</h2>
                            <div> <input id="input1" type="text" onChange={(e) => this.setState({ name: e.target.value })} /></div>
                            <div> <input id="input2" type="email" onChange={(e) => this.setState({ email: e.target.value })} /></div>
                            <div> <input id="input3" type="password" onChange={(e) => this.setState({ password: e.target.value })} /></div>
                            <button onClick={() => this.setState({ index: 2 })}>Next</button>
                        </div>
                        <div>
                            <h2>Second Form:</h2>
                            <div> <input id="input21" type="text" onChange={(e) => this.setState({ line1: e.target.value })} /></div>
                            <div> <input id="input22" type="text" onChange={(e) => this.setState({ line2: e.target.value })} /></div>
                            <div> <input id="input23" type="text" onChange={(e) => this.setState({ city: e.target.value })} /></div>
                            <div> <input id="input24" type="text" onChange={(e) => this.setState({ state: e.target.value })} /></div>
                            <div> <input id="input25" type="text" onChange={(e) => this.setState({ code: e.target.value })} /></div>
                            <button onClick={() => this.setState({ index: 3 })}>Next</button>
                        </div>
                        <div>
                            <h2>Third Form:</h2>
                            <div> <input id="input31" type="text" onChange={(e) => this.setState({ credit: e.target.value })} /></div>
                            <div> <input id="input32" type="text" onChange={(e) => this.setState({ date: e.target.value })} /></div>
                            <button onClick={() => this.setState({ index: 4 })}>Home </button>
                        </div>

                    </form>

                }
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"))


// export default App;

