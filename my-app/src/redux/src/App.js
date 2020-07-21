import React, { Component } from "react";
import Counter from "./views/Counter";
import { Provider } from "react-redux";
import store from './store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Counter />
            </Provider>
        );
    }
}

export default App;
