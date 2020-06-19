import React, { Component } from 'react';
import Home from './HomeComponent';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { ARTICLES } from '../shared/articles';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import WellnessDirectory from './WellnessDirectory';
import ArticleInfo from './ArticleInfoComponent';
import AdventureDirectory from './AdventureDirectory';

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
                <Home article={this.state.articles.filter(article => article.featured)[0]}  />
            );
        }

        const ArticlePage = ({match}) => {
            
            return (
                <ArticleInfo 
                    article={this.state.articles.filter(article => article.id === +match.params.articleID)[0]} 
                />
            );
        }

        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/wellness' exact component={WellnessDirectory} />
                    <Route path='/wellness/:articleID' component={ArticlePage} />
                    <Route path='/adventure' exact component={AdventureDirectory} />
                    <Route path='/adventure/:articleID' component={ArticlePage} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </BrowserRouter>
        );
    };
}

export default Main;