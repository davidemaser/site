import React, {Component} from 'react';
import './App.css';
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import JsonData from "./Data/Schema/page.json";
import Helmet from 'react-helmet';

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
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{this.state.data.title}</title>
                    <meta name="description" content={this.state.data.meta.description} />
                </Helmet>
                <Header data={this.state.data} node="header"/>
                <Content data={this.state.data} node="body"/>
                <Footer data={this.state.data} node="footer"/>
            </div>
        );
    }
}

export default App;
