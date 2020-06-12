import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCard({item}) {
    const description = item.contents.substr(0, 150);
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.title}</CardTitle>
                <CardText>{description}...</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col m-1">
                    <RenderCard item={props.article}/>
                </div>
            </div>
        </div>
    );
}

export default Home;