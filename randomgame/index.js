class Header extends React.Component {
    render() {
        console.log("this.props", this.props)
        return (
            <div className="jumbotron text-center">
                <h3>Guessing random number</h3>
                <p>I generate a number in range {this.props.start} - {this.props.end}, can you guess it with not exceed 10 times? </p>
            </div>
        );
    }
}

class MainGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guessing: 0,
            target: this.random(),
            message: "",
        };
    }

    newGame = () => {
        this.setState({
            guessing: 0,
            target: this.random(),
            message: "",
        });
    };

    random = () => {
        const {start, end} = this.props;
        let gap = end - start + 1;
        return Math.floor(Math.random() * (gap)) + start;
    };

    onGuessingChange = (event) => {
        // console.log(event.target.value);
        // console.log(typeof(event.target.value))
        let guessing = Number(event.target.value);
        if (Number.isNaN(guessing)) {
            guessing = 0;
        }
        this.setState({
            guessing,
        });
    };

    guess = () => {
        // this.props.updateCounter(20); -- test
        let { guessing, target } = this.state;
        let { counter } = this.props;
        counter++;
        let message = "";
        if (guessing < target) {
            message = "Your guessing is smaller";
        } else if (guessing > target) {
            message = "Your guessing is bigger";
        } else {
            setTimeout(() => {
                alert("You win with " + counter + " guess(es)");
                this.newGame()
            }, 1) 
        }
        if (counter >= 10 && message != "") {
            setTimeout(() => {
                alert("You lose!");
                this.newGame()
            }, 100);
            this.setState({counter})
        }
        this.setState({ message, counter })
    };

    render() {
        const { guessing, message } = this.state;
        const { counter } = this.props;
        return (
            <div className="body">
                <button onClick={this.newGame}>New Game</button>
                <hr /> {this.state.target}
                <p>Số lần bạn đã đoán: {counter}</p>
                <p>Số bạn đang đoán là: </p>
                <input
                    type="text"
                    value={guessing}
                    onChange={this.onGuessingChange}
                />
                <button onClick={this.guess}>Đoán</button>
                <p>{message}</p>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: 1,
            end: 100000000,
            counter: 0,
        }
    }

    updateCounter = (counter) => {
        this.setState({
            counter
        })
    }

    render() {
        const { start, end, counter } = this.state;
        return (
            <div>
                <Header start={start} end={end} />
                <MainGame updateCounter={this.updateCounter} counter={counter} start={start} end={end}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
