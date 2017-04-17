import React, {Component} from 'react';
import './App.css';
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: 'en'
        }
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}

export default App;
