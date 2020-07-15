import React, { Component, PureComponent } from "react";

class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            student: {
                name: "Truong An",
                class: "REACTJS",
                mark: 0
            }
        };
    }

    increase = () => {
        this.setState({
            counter: this.state.counter + 1,
        });
    };

    increase0 = () => {
        this.setState({
            counter: this.state.counter,
        });
    };

    increaseMark = () => {
        // const { student } = this.state;
        // student.mark++
        // this.setState({ student })
        this.setState({
            student: {
                // name: this.state.student.name,
                // class: this.state.student.class,
                ...this.state.student,
                mark: this.state.student.mark + 1
            }
        })
    }

    render() {
        return (
            <div>
                {/* <p>Counter: {this.state.counter}</p> */}
                Class: <ShowCounterClass counter={this.state.counter} />
                <hr />
                Function: <ShowCounterFunc counter={this.state.counter} />
                <hr />
                Student: <ShowStudentClass student={this.state.student} />
                <hr/>
                <button onClick={this.increase}>Increase</button>
                <button onClick={this.increase0}>Increase0</button>
                <button onClick={this.increaseMark}>Increase Mark</button>
            </div>
        );
    }
}

class ShowStudentClass extends PureComponent {
    
    // warning
    // shouldComponentUpdate() {
    //     return true
    // }

    render() {
        const { student } = this.props;
        return (
            <div>
                Name: { student.name } <br/>
                Class: { student.class } <br/>
                Mark: { student.mark }
            </div>
        )
    }
}

class ShowCounterClass extends PureComponent {
    render() {
        console.log("Class rendering");
        const { counter } = this.props;
        return <p>Counter: {counter}</p>;
    }
}

// function ShowCounterFunc(props) {
//     return (
//         <p>Counter: {props.counter}</p>
//     )
// }

// const ShowCounterFunc = (props) => <p>Counter: {props.counter}</p>;
const ShowCounterFunc = React.memo(({ counter }) => {
    console.log("Func rendering")
    return <p>Coutner: {counter} </p>;
});

export default ClassCounter;
