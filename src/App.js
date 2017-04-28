import React, {Component} from 'react';
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import JsonData from "./Data/Schema/page.json"; //load the page schema directly and pass it around the components
import Helmet from 'react-helmet';
import ActionButton from "./Components/UI/ActionButton";
import TableView from "./Components/Renderers/TableView";
import LoadJson from "./Components/Loaders/JsonLoader";
import DataList from './Data/Table.json';
import BoxMarquee from "./Components/UI/BoxMarquee";
import BlockView from "./Components/UI/BlockView";
import FlexBlockView from "./Components/UI/FlexBlockView";
import PropTypes from 'prop-types';
import UserForm from "./Components/Forms/ContactForm";
import SearchForm from "./Components/Forms/SearchForm";
import ScrollInNav from "./Components/UI/ScrollIn";
import Waypoint from 'react-waypoint';
import Calculator from "./Utilities/Calculator";
import ContactCard from "./Components/UI/ContactCard";

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
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{this.state.data.title}</title>
                    <meta name="description" content={this.state.data.meta.description} />
                    <meta name="keywords" content={this.state.data.meta.keywords} />
                </Helmet>
                <ScrollInNav scrollInHeight={50}><Header data={this.state.data} node="header"/></ScrollInNav>
                <SearchForm async={true} placeholder="This is a placeholder"/>
                <UserForm/>
                <FlexBlockView background={1} color={4}>
                    <div className="item">Hello <br /> how are you <br/>doing</div>
                    <div className="item">Hello</div>
                </FlexBlockView>
                <BlockView color={1} background={3} height={450}><p>This would be content</p></BlockView>
                <BlockView color={7} background={5} height={850}><ContactCard name="david"/></BlockView>
                <BlockView color={7} background={2} height={100}><p>This would be content</p></BlockView>
                <Waypoint scrollableAncestor={window} onEnter={console.log('just came into view')} onLeave={console.log('just left the view')}>
                    <div>
                    <Content data={this.state.data} node="body"/>
                    </div>
                </Waypoint>
                <Footer data={this.state.data} node="footer"/>
                <ActionButton/>
                <BoxMarquee title="this would be the title" content="this is a title"/>
                <TableView data={DataList['table']} />
                <LoadJson url="http://davidemaser.github.io/data/temp-table.json" method="get" target="table"/>
                <Calculator/>
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