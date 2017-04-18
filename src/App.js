import React, {Component} from 'react';
import './App.css';
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import JsonData from "./Data/Schema/page.json";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: 'en',
            data:JsonData[this.props.node],
        };
        console.log(this.state.data);
    }

    render() {
        return (
            <div className="App">
                <Header data={this.state.data} node="header"/>
                <Content data={this.state.data} node="body"/>
                <Footer data={this.state.data} node="footer"/>
            </div>
        );
    }
}

export default App;
