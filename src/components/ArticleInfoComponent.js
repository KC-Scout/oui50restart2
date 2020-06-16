import React from 'react';
import { Card, CardImg, CardText, CardBody} from "reactstrap";

function RenderArticle({ article }) {
    return (
        <div className="col m-5">
            <Card>
                <CardImg top src={article.image} alt={article.name} />
                <CardBody>
                    <CardText>{article.contents}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function ArticleInfo(props) {
    if (props.article) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>{props.article.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderArticle article={props.article} />
                </div>
            </div>
        );
    }
    return <div/>;
}

export default ArticleInfo;