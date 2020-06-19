import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import { ARTICLES } from "../shared/articles";

function FeaturedCard({ item }) {
    const description = item.contents.substr(0, 150);
    return (
            <Link to={`/wellness/${item.id}`}>
                <Card key={item.id}>
                    <CardImg src={item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.title}</CardTitle>
                        <CardText>{description}...</CardText>
                    </CardBody>
                </Card>
            </Link>
    );
}

function AdventureCard({ item }) {
  const chooseCat = ARTICLES.filter((article) =>
    article.category.includes("adventure")
  );
  const randomNum = Math.floor(Math.random() * Math.floor(3));
  const randomFeature = chooseCat[randomNum];
  const description = randomFeature.contents.substr(0, 150);
  console.log(randomFeature)
  return (
    <Link to={`/adventure`}>
      <Card>
        <CardImg src={randomFeature.image} alt={randomFeature.name} />
        <CardBody>
          <CardTitle>{randomFeature.title}</CardTitle>
          <CardText>{description}...</CardText>
        </CardBody>
      </Card>
    </ Link>
  );
}

function WellnessCard({ item }) {
  const chooseCat = ARTICLES.filter((article) =>
    article.category.includes("wellness")
  );
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
        <div className="col mt-2 m-1">
          <h2>Our Featured Article</h2>
          <FeaturedCard item={props.article} />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <h4>Adventure</h4>
          <AdventureCard item={props.article}/>
        </div>
        <div className="col-6">
          <h4>Health and Wellness</h4>
          <WellnessCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
