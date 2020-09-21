import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Button,
  NavDropdown,
  Form,
  FormControl,
  Nav
} from "react-bootstrap";

const Navigation = ({searchByKeyword}) => {
    let keyword= "";
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Find Film</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
           
          </Nav>
          <Form inline onSubmit= {(event) => {
              event.preventDefault();
              searchByKeyword(keyword);
          }}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" 
            onChange={(event) => {
                keyword = event.target.value;
                console.log("keyword", keyword);

            }} />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
