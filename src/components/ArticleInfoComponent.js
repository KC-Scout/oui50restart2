import { Card, CardImg, CardText, CardBody} from "reactstrap";
import React from 'react';

function RenderArticle({ article }) {
    return (
        <div className="col m-5">
            <Card>
                <CardImg top src={article.image} alt={article.title} />
                <CardBody>
                    <CardText>{article.contents}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function ArticleInfo({ article }) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col mt-4">
                        <h2>{article.title}</h2>
                        <hr />
                        <h5>Author: {article.author}</h5>
                    </div>
                </div>
                <div className="row">
                    <RenderArticle article={article} />
                </div>
            </div>
        );
}

export default ArticleInfo;