import React, { Component } from "react";
import { login } from "./api";

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
        this.setState({ data: { ...this.state.data, [name]: value } });
    };

    submit = (event) => {
        this.setState({ loading: true, message: {} });
        // login({ username: this.state.data.username, password: this.state.data.password });
        login(this.state.data)
            .then((res) => {
                console.log("data on response: ", res);
                // data response: res.data
                // store to localstorage
                // redirect to homepage
                this.setState({ loading: false });
            })
            .catch((err) => {
                console.log("error on response: ", err);
                console.log("error.response", err.response);
                this.setState({ message: { err: err.response.data.err }, loading: false });
            });
        event.preventDefault();
    };

    render() {
        console.log("State", this.state);
        const { message, loading } = this.state;
        return (
            <div>
                <form>
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
                    {message.err && (
                        <p style={{ color: "red" }}> {message.err} </p>
                    )}
                    {loading && (
                        <p style={{ color: "green" }}> Loading.... </p>
                    )}
                    <input type="submit" value="Submit" onClick={this.submit} />
                </form>
            </div>
        );
    }
}
