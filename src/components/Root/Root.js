import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Login from "../LogIn/Login";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="2">
           <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg="10">
         
              <Outlet></Outlet>
           
          </Col>
        
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Root;
