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


const Navigation = ({searchByKeyword, getMoviesByGenre}) => {
    let keyword= "";
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Find Film</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <NavDropdown
              className="d-flex flex-row-reverse"
              title="Genres"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item onClick={() => getMoviesByGenre("")}>
                All
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => getMoviesByGenre("28")}>
                Action
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => getMoviesByGenre("16")}>
                Animation
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => getMoviesByGenre("35")}>
                Comedy
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => getMoviesByGenre("99")}>
                Documentary
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => getMoviesByGenre("18")}>
                Drama
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => getMoviesByGenre("14")}>
                Fantasy
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => getMoviesByGenre("36")}>
                History
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => getMoviesByGenre("27")}>
                Horror
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => getMoviesByGenre("878")}>
                Science Fiction
              </NavDropdown.Item>
              
            </NavDropdown>

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
