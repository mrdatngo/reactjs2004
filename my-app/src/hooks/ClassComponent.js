import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "ReacJS"
        }
    }

    componentDidMount () {
        document.title = this.state.name
    }

    componentDidUpdate () {
        document.title = this.state.name
    }

    onInputChange = (event) => {
        this.setState({ ...this.state, [event.target.name]: event.target.value })
    }

    render() {
        const { name } = this.state;
        return (
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={name} onChange={this.onInputChange}/>
            </div>
        )
    }
}
