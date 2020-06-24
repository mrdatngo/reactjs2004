// var element = React.createElement("p", null, "Hello world");
// var element = /*#__PURE__*/ React.createElement(
//     "div",
//     null,
//     /*#__PURE__*/ React.createElement("h1", null, "Hello world"),
//     /*#__PURE__*/ React.createElement(
//         "p",
//         null,
//         "This is hello world description"
//     )
// );
const newMember = "Tran Ngoc Tu";
var element = (
    <div>
        <h1>Hello class</h1>
        <h3>Welcome: {newMember}</h3>
        <p>This is hello world description</p>
    </div>
);

class App extends React.Component {
    constructor(props) {
        super(props);
        // this.counter = 0;
        this.state = {
            counter: 0,
        };
        // this.decrease = this.decrease.bind(this);
    }

    increase(step) {
        this.setState({
            counter: this.state.counter + step,
        });
    }

    decrease = () => {
        this.setState({
            counter: this.state.counter - 1,
        });
    };

    render() {
        console.log("rendering...");
        return (
            <div>
                <h3>Counter: {this.state.counter}</h3>
                {/* <button onClick={this.increase}>Increase 1</button> */}
                <button
                    onClick={() => {
                        this.increase(1);
                    }}
                >
                    Increase 1
                </button>
                <button
                    onClick={() => {
                        this.increase(2);
                    }}
                >
                    Increase 2
                </button>
                <button onClick={this.decrease}>Decrease</button>
            </div>
        );
    }
}

// setInterval(() => {
//     var oclock = (
//         <div>
//             <p>{new Date().toLocaleTimeString()}</p>
//         </div>
//     )
// }, 1000)
class OClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: "-- : -- : --"
        }
    }

    interval = () => {
        this.setState({
            timer: new Date().toLocaleTimeString()
        })
    }

    start = () => {
        this.interval()
        this.running = setInterval(this.interval, 1000);    }

    stop = () => {
        clearInterval(this.running);
        this.setState({
            timer: "-- : -- : --"
        })
    }
    
    render() {
        return (
            <div>
                <p>{this.state.timer}</p>
                <button onClick={this.start}>Start OClock</button>
                <button onClick={this.stop}>Stop OClock</button>
            </div>
        )
    }
}
ReactDOM.render(<OClock />, document.getElementById("app"));

// ReactDOM.render(element, document.getElementById("app"));
// ReactDOM.render(<App />, document.getElementById("app"));
