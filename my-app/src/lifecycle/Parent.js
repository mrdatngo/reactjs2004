import React, { Component } from "react";

export default class Parent extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor: Component parent init");
        this.state = {
            counter: 1,
            // data: {
            //     counter: 0,
            // },
            showChild: true,
        };
    }

    componentDidMount() {
        console.log("ComponentDidMount: Component parent mounted");
        // shouldn't do it
        // this.setState({
        //     counter: 1,
        //     data: {
        //         counter: 0,
        //     },
        // });
        // updating phase
        // call api and setState => render
    }

    increase = () => {
        this.setState({ counter: this.state.counter + 1 });
    };

    changeStatus = () => {
        this.setState({ showChild: !this.state.showChild });
    };

    render() {
        console.log("Render: Component parent");
        return (
            <div>
                Parent
                <hr />
                Counter: {this.state.counter}
                <hr />
                <button onClick={this.increase}>Increase</button>
                <hr />
                <button onClick={this.changeStatus}>
                    {this.state.showChild ? "Ẩn" : "Hiện lên"}
                </button>
                {this.state.showChild && <Child counter={this.state.counter} />}
            </div>
        );
    }

    componentDidUpdate() {
        console.log("ComponentDidUpdate: Parent");
    }
}

class Child extends React.Component {
    constructor(props) {
        super(props);
        console.log("Constructor: Child");
        this.state = {
            timer: "-- : -- : --",
            counter: 0
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (state.counter < props.counter) {
            console.log("props: ", props, "state: ", state);
            let result = { ...state, counter: props.counter}
            // console.log("Result: ", result)
            return result
        } else {
            return {}
        }
    }

    // componentDidMount() {
    //     console.log("ComponentDidMount: Child");
    //     this.timerInterval = setInterval(() => {
    //         this.setState({ timer: new Date().toLocaleTimeString()})
    //         // console.log("Timer: ", new Date().toLocaleTimeString())
    //     }, 1000);
    // }

    increase = () => {
        this.setState({ counter: this.state.counter + 1})
        // this.forceUpdate()
    }

    shouldComponentUpdate(nextProps, nextState) {
        // return false;
        console.log("shouldComponentUpdate: child");
        if (this.state.counter === nextState.counter && this.props.counter === nextProps.counter) {
            return false
        }
        return true
    }

    doNothing = () => {
        this.setState({ counter: this.state.counter })
    }

    render() {
        console.log("Render: Child")
        return (<div>
            Child: <br/>
            Counter Parent: {this.props.counter}
            <br/>
            Counter Child(state): {this.state.counter}
            <br/>
            Timer:  { this.state.timer }
            <button onClick={this.increase}>Child Increase Counter</button>
            <button onClick={this.doNothing}>Do Nothing</button>
        </div>);
    }

    componentDidUpdate() {
        console.log("ComponentDidUpdate: Child");
    }

    componentWillUnmount() {
        console.log("ComponentWillUnmount: Child");
        clearInterval(this.timerInterval)
    }
}
