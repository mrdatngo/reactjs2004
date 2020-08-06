import React, { Component } from 'react';
import ClassComponent from './ClassComponent';
import FuncComponent from './FuncComponent'

class Hooks extends Component {
    state = {
        check: true
    }
    render() {
        const { check } = this.state;
        return (
            <div>
                Component: { check ? "Class Component" : "Func Component" }
                <button onClick={() => { this.setState({check: !this.state.check}) }}>Change</button>
                <hr/>
                { check ? <ClassComponent/> : <FuncComponent /> }
            </div>
        );
    }
}

export default Hooks;