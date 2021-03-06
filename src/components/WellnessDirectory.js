import React from 'react';
import { Card, CardImg, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ARTICLES } from '../shared/articles';


function RenderDirectoryItem({ article }) {
    return (
        <Card>
            <Link to={`/wellness/${article.id}`}>
                <CardTitle>{article.title}</CardTitle>
                <CardImg width="100%" src={article.image} />
            </Link>
        </Card>
    );
}

function WellnessDirectory(props) {
    const wellnessArticles = ARTICLES.filter(article => article.category === 'wellness')
    const directory = wellnessArticles.map(article => {
        return (
            <div key={article.id} className="col-md-5 m-1">
                <RenderDirectoryItem article={article} />
            </div>
        );
    });

    return (
        <div className="container" >
            <div className="row">
                <div className="col mt-2">
                    <h2>Health & Wellness Articles</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>
    );

}

export default WellnessDirectory; 