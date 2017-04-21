import React, {Component} from 'react';
import './App.css';
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import JsonData from "./Data/Schema/page.json"; //load the page schema directly and pass it around the components
import Helmet from 'react-helmet';
import UIDrawer from "./Components/UI/Drawer";
import ActionButton from "./Components/UI/ActionButton";
import Snackbar from 'material-ui/Snackbar'
import DoSomeMath from "./Components/Renderers/FormatMath";
import TableView from "./Components/Renderers/TableView";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: 'en',
            data:JsonData[this.props.node],
            snackbar:{
                open:false,
                message:'here\'s a message'
            }
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
                <Snackbar open={this.state.snackbar.open} message={this.state.snackbar.message} />
                <DoSomeMath x="8" y="20" method="divi" />
                <TableView/>
            </div>
        );
    }
}

export default App;
