import React, { Component } from "react";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                username: "",
                password: "",
            },
            message: {
                err: "",
                success: "",
            },
            loading: false,
        };
    }

    onDataChange = (event) => {
        // console.log(event.target.name);
        // console.log(event.target.value);
        // const { name, value } = event.target;
        // if (name === "username") {
        //     this.setState({
        //         data: {
        //             username: value,
        //             password: this.state.data.password,
        //         },
        //     });
        // } else if (name === "password") {
        //     this.setState({
        //         data: {
        //             username: this.state.data.username,
        //             password: value
        //         }
        //     })
        // }
        const { name, value } = event.target;
        this.setState({ data: { ...this.state.data, [name]: value } })
    };

    render() {
        console.log("State", this.state)
        return (
            <div>
                <form action="server.js">
                    <label htmlFor="username">User name</label>
                    <input
                        type="text"
                        name="username"
                        onChange={this.onDataChange}
                    />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={this.onDataChange}
                    />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
