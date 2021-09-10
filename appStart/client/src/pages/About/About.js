/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
import React from "react";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";
import Col from "../../components/Col/Col";

/**
 *
 */
export default function About() {
  return (
    // eslint-disable-next-line no-trailing-spaces
    <Container>
      <div>
        <Row>
          <Col size="md-12">
            <div className="card-body ">
              <h4 className="card-title text-center py-5 textColor">
                About Hearth Library
              </h4>
            </div>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <p className="card-text py-2 textSubtle">
              Hearth Library was built to house our favorite recipes across the
              web and real life. Friends and Family are free to submit what they
              can, so the world will have access to the food that we love.
            </p>
            <p className="textSubtle">
              Membership is closed, but anyone has the ability to read the
              recipes off the website.
            </p>
            <p className="textSubtle">
              This website was created by Douglas Lubaway, Nishad Kurup, Kyle
              Nance, and James Sewere.
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
