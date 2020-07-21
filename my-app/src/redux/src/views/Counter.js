import React, { Component } from 'react';
import { increase, increaseAsync } from '../actions/counterActions'
import { increaseMark } from '../actions/studentActions'
import { connect } from 'react-redux'

class Counter extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     counter: 0
        // }
    }

    increase = () => {
        // this.setState({
        //     counter: this.state.counter + 1
        // })
        this.props.increase()
    }

    increaseAsync = () => {
        this.props.increaseAsync()
    }

    increaseMark = () => {
        this.props.increaseMark()
    }

    render() {
        return (
            <div>
               Counter: {this.props.counter.value}
               <hr/>
               Student Mark: { this.props.student.mark }
               <hr/>
               <button onClick={this.increase}>Increase</button>
               <button onClick={this.increaseAsync}>Increase Async</button>
               <button onClick={this.increaseMark}>Increase Mark</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter,
        student: state.student
    }
}

function mapDispatchToProps() {
    return {
        increase,
        increaseAsync,
        increaseMark
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Counter);