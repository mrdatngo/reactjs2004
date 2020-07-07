import React, { Component } from "react";

// function App() {
//   return (
//     <div>Hello class</div>
//   );
// }

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    increase = () => {
        this.setState({
            counter: this.state.counter + 1,
        });
    };

    message = (number) => {
        // if (number % 2 == 0) {
        //   return <mark>EVEN</mark>
        // } else {
        //   return <mark>ODD</mark>
        // }
        return number % 2 == 0 ? <mark>EVEN</mark> : <mark>ODD</mark>;
    };

    render() {
        const { counter } = this.state;
        return (
            <div>
                Counter: {counter} :{" "}
                {counter % 2 == 0 ? <mark>EVEN</mark> : <mark>ODD</mark>}
                {/* { this.message(this.state.counter) } */}
                <br />
                <button onClick={this.increase}>Increase</button>
            </div>
        );
    }
}

export default App;

// export { App };
