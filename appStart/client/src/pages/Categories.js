import React from "react";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
function Categories(props){
  return(
    <div>
    <Container>
    <Row>
        <Col size="md-12">
      <div className= "card-body ">
        <h5 className="card-title text-center py-2">Menu</h5>
        </div>  
        </Col>
         </Row>
         <Row>
        <Col size="md-4" >
      <div className= "card-body  ">
        <h5 className="card-title text-center  menu py-2">Soup</h5>
        <ol  className="text-center  " > 
            <li>Fast Chicken Soup</li>
            <li>Shrimp Stock</li>
            <li>Slow Chicken Soup</li>
            <li>Valencia Soup</li>
          </ol>

        </div>  
        </Col>
        <Col size="md-4" >
      <div className= "card-body  ">
        <h5 className="card-title text-center  menu py-2">Casserole</h5>
        <ol  className="text-center  " > 
            <li>Breakfast Casserole</li>
            <li> Cabbage Roll Casserole <span className="span"> Coming Soon</span></li>
            <li></li>
            <li></li>
          </ol>

        </div>  
        </Col>

        <Col size="md-4" >
      <div className= "card-body  ">
        <h5 className="card-title text-center  menu py-2">Soup</h5>
        <ol  className="text-center  " > 
            <li>Fast Chicken Soup</li>
            <li>Shrimp Stock</li>
            <li>Slow Chicken Soup</li>
            <li>Valencia Soup</li>
          </ol>

        </div>  
        </Col>
         
         
        
         </Row>

    </Container>
  
    
     
    </div>


  )
}


export default Categories;
