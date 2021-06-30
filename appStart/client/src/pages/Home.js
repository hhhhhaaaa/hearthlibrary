/* eslint-disable no-unused-vars */
import React,{Component} from "react";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import Card from "../components/Card/Card";
import image1 from "./image/image1.jpg";

/**
 *
 */
export default function Home() {
  return (
    <Container>
      <Row>
        <Col size="md-6">
        <div>
        <div  className= "card-body">
        <h4 className="card-title text-center">Popular Recipes</h4>
        <h5 className="text-center" > Hamburger</h5>
    <p class="card-text py-5">

    A hamburger (also burger for short) is a food, typically considered a sandwich, 
    consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled. ... A
    hamburger topped with cheese is called a cheeseburger.
    </p>
        <tags > tags</tags>

        </div>
      </div>
        </Col>
        <Col size="md-6">
      <div className="card">
      <div className="img-container">
      <img src={image1 } className="img-fluid image-resize"></img>
      </div>

      </div>
        </Col>
      </Row>
      <Row >
        <Col size="md-4"> 
        <h4 className="py-2 text-center">  Recent Recipes List</h4>
          <ul> 
            <li>Cake</li>
            <li>Cake</li>
            <li>Cake</li>
            <li>Cake</li>
            <li>Cake</li>
          </ul>
        </Col>
       <Col size="md-8">
<h4 className="py-2 text-center"> About Heart Library</h4>
<p class="card-text py-5">
       The Library Restaurant would like to invite you to join us for a meal to remember. From Bananas Foster to mouth-watering Steak Diane,
        our tuxedoed staff are masters of table-side preparation. It is our pleasure to serve you.
  </p>
       </Col>
      
      </Row>
      
    </Container>

  )
}