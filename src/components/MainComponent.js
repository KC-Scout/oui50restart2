import React, { Component } from 'react';
import Home from './HomeComponent';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { ARTICLES } from '../shared/articles';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Wellness from './WellnessDirectory';
import ArticleInfo from './ArticleInfoComponent';

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

        const ArticlePage = () => {
            return (
                <ArticleInfo article={this.state.articles.filter(article => article.id)} />
            );
        }

        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/wellness' component={Wellness} />
                    <Route path='/wellness/article.id' component={ArticlePage} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </BrowserRouter>
        );
    };
}

export default Main;