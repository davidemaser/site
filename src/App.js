import React, {Component} from 'react';
import './App.css';
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import JsonData from "./Data/Schema/page.json"; //load the page schema directly and pass it around the components
import Helmet from 'react-helmet';
import UIDrawer from "./Components/UI/Drawer";
import ActionButton from "./Components/UI/ActionButton";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: 'en',
            data:JsonData[this.props.node]
        };
    }

    render() {
        return (
            <div className="App">
                <UIDrawer/>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{this.state.data.title}</title>
                    <meta name="description" content={this.state.data.meta.description} />
                    <meta name="keywords" content={this.state.data.meta.keywords} />
                </Helmet>
                <Header data={this.state.data} node="header"/>
                <Content data={this.state.data} node="body"/>
                <Footer data={this.state.data} node="footer"/>
                <ActionButton/>
            </div>
        );
    }
}

export default App;
