
// import Form1 from './form1.jsx';

class App extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <h1> Multistep Checkout Experience</h1>
                <button type="button" id="checkout">Checkout</button>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"))


// export default App;

