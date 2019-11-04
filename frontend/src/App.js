
import logo from './logo.svg';
import './App.css';

import React, {Component} from 'react';

import Header from './components/Header';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

export default App;
