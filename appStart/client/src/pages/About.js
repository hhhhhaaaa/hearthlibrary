/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
import React from 'react';
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import Card from "../components/Card/Card";
import image2 from "./image/image2.jpg";

/**
 *
 */
export default function About() {
  return (
    // eslint-disable-next-line no-trailing-spaces
       // eslint-disable-next-line no-trailing-spaces
    <Container>
 <div className="about">
    
       <Row>
          <Col size="md-12">

            <div className="card-body ">
              <h4 className="card-title text-center py-5">About Heart Library</h4>
            </div>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">

            <p className="card-text py-2 " >
              A hamburger (also burger for short) is a food, typically considered a sandwich,
              consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled. ... A
              hamburger topped with cheese is called a cheeseburger.
              The Library Restaurant would like to invite you to join us for a meal to remember. From Bananas Foster to mouth-watering Steak Diane,
              our tuxedoed staff are masters of table-side preparation. It is our pleasure to serve you.
            </p>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">

            <p className="card-text py-2 " >
              A hamburger (also burger for short) is a food, typically considered a sandwich,
              consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled. ... A
              hamburger topped with cheese is called a cheeseburger.
              The Library Restaurant would like to invite you to join us for a meal to remember. From Bananas Foster to mouth-watering Steak Diane,
              our tuxedoed staff are masters of table-side preparation. It is our pleasure to serve you.
            </p>
          </Col>
        </Row>

      </div>
    </Container>

  );
}
