import React, { Component } from "react";

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curTodo: "",
            todoList: [],
        };
    }

    onChange = (event) => {
        this.setState({ curTodo: event.target.value });
    };

    addTodo = () => {
        // const { todoList } = this.state;
        // todoList.push(this.state.curTodo);
        // this.setState({ todoList })
        this.setState({
            todoList: [...this.state.todoList, this.state.curTodo],
        });
    };

    getRowsElement = () => {
        // let result = [];
        // const { todoList } = this.state;
        // // for (let i = 0; i < todoList.length; i++) {
        // //     result.push(<li>{ todoList[i] }</li>);
        // // }
        // for (const item of todoList) {
        //     result.push(<li>{ item }</li>);
        // }
        // return result
        return this.state.todoList.map((item) => <li>{item}</li>);
    };

    render() {
        console.log("State: ", this.state);
        return (
            <div>
                <input type="text" onChange={this.onChange} />
                <button onClick={this.addTodo}>Add</button>
                {/* <ul>{this.getRowsElement()}</ul> */}
                {
                    <ul>
                        {this.state.todoList.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                }
            </div>
        );
    }
}

export default ToDo;
