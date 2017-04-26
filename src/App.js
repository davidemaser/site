import React, {Component} from 'react';
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import JsonData from "./Data/Schema/page.json"; //load the page schema directly and pass it around the components
import Helmet from 'react-helmet';
{/*import UIDrawer from "./Components/UI/Drawer";*/}
import ActionButton from "./Components/UI/ActionButton";
{/*import Snackbar from 'material-ui/Snackbar'
import DoSomeMath from "./Components/Renderers/FormatMath";*/}
import TableView from "./Components/Renderers/TableView";
import LoadJson from "./Components/Loaders/JsonLoader";
import DataList from './Data/Table.json';
import BoxMarquee from "./Components/UI/BoxMarquee";
{/*import Loading from "./Components/UI/Loading";*/}
import BlockView from "./Components/UI/BlockView";
import FlexBlockView from "./Components/UI/FlexBlockView";
import PropTypes from 'prop-types';
import UserForm from "./Components/Forms/ContactForm";
import SearchForm from "./Components/Forms/SearchForm";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: 'en',
            data:JsonData[this.props.node],
            snackbarOpen:true,
            snackbarMessage:'here\'s a message'
        };

        this.toggleSnackBar = this.toggleSnackBar.bind(this);
    }

    toggleSnackBar(){
        this.state.snackbarOpen === true ? this.setState({snackbarOpen:false}) : this.setState({snackbarOpen:true});
    }

    render() {
        return (
            <div className="App">
                <SearchForm async={true}/>
                <UserForm/>
                <FlexBlockView background={1} color={4}>
                    <div className="item">Hello <br /> how are you <br/>doing</div>
                    <div className="item">Hello</div>
                </FlexBlockView>
                <BlockView color={1} background={3}><p>This would be content</p></BlockView>
                {/*<Loading background="rgba(0, 0, 0, 0.85)" color="#fff" show={true} error={true} />
                <UIDrawer/>*/}
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
                {/*<Snackbar open={this.state.snackbarOpen} message={this.state.snackbarMessage} autoHideDuration={5000} />
                <DoSomeMath a="8" b="20" method="divi" operand="none" />*/}
                <BoxMarquee title="this would be the title" content="this is a title"/>
                <TableView data={DataList['table']} />
                <LoadJson url="http://davidemaser.github.io/data/temp-table.json" method="get" target="table"/>
            </div>
        );
    }
}
App.propTypes = {
    node:PropTypes.string.isRequired
};
App.defaultProps ={
    node:'default'
};

export default App;