import React, { Component } from 'react';
import Home from './HomeComponent';
import { Switch, Route } from 'react-router-dom';
import { ARTICLES } from '../shared/articles';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: ARTICLES
        };
    }
    render() {
        const HomePage = () => {
            return (
                <Home article={this.state.articles.filter(article => article.featured)[0]} />
            );
        }
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                </Switch>
                <Footer />
            </React.Fragment>
        );
    };
}

export default Main;