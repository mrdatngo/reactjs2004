import React, { Component } from 'react'
import { createStore } from 'redux'

const initialStateStore = {
    counter: 0
}

function reducer(state, action) {
    console.log("action", action)
    console.log("State: ", state);
    switch(action.type) {
        case 'INCREASE':
            return {
                counter: state.counter + 1
            }
        case 'INCREASE_ASYNC':
            return {
                counter: state.counter + 1
            }
        default:
            return state
    }
}

var store = createStore(reducer, initialStateStore)

var increaseAction = function(type) {
    store.dispatch({ type })
}

var increaseAsyncAction = function(type) {
    setTimeout(() => {
        store.dispatch({ type })
    }, 1000)
}

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: store.getState().counter
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                counter: store.getState().counter
            })
        })
    }

    increase = () => {
        // this.setState({
        //     counter: this.state.counter + 1
        // })
        // actions
        increaseAction('INCREASE');
        this.setState({
            counter: store.getState().counter
        })
    }

    increaseAsync = () => {
        increaseAsyncAction('INCREASE_ASYNC');
        this.setState({
            counter: store.getState().counter
        })
    }

    render() {
        return (
            <div>
                Counter: { this.state.counter } 
                <hr/>
                <ShowCounter />
                <hr/>
                <button onClick={this.increase}>Increase</button>
                <button onClick={this.increaseAsync}>Increase Async</button>
            </div>
        )
    }
}

class ShowCounter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: store.getState().counter
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                counter: store.getState().counter
            })
        })
    }

    render() {
        return(
            <div>
                ShowCounter: { this.state.counter }
            </div>
        )
    }
}