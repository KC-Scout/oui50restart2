import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { ARTICLES } from '../shared/articles';

function FeaturedCard({item}) {
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

function AdventureCard({item}) {
    const chooseCat = ARTICLES.filter(article => article.category.includes("adventure"));
    const randomNum = Math.floor(Math.random() * Math.floor(3));
    const randomFeature = chooseCat[randomNum];
    const description = randomFeature.contents.substr(0, 150);

    return (
        <Card>
            <CardImg src={randomFeature.image} alt={randomFeature.name} />
            <CardBody>
                <CardTitle>{randomFeature.title}</CardTitle>
                <CardText>{description}...</CardText>
            </CardBody>
        </Card>
    );
}

function WellnessCard({item}) {
    const chooseCat = ARTICLES.filter(article => article.category.includes("wellness"));
    const randomNum = Math.floor(Math.random() * Math.floor(3));
    const randomFeature = chooseCat[randomNum];
    const description = randomFeature.contents.substr(0, 150);

    return (
        <Card>
            <CardImg src={randomFeature.image} alt={randomFeature.name} />
            <CardBody>
                <CardTitle>{randomFeature.title}</CardTitle>
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
                    <FeaturedCard item={props.article}/>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <AdventureCard />                    
                </div>
                <div className="col-6">
                    <WellnessCard />                    
                </div>
            </div>
        </div>
    );
}

export default Home;