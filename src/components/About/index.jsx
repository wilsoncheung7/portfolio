import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function About() {
  // const [state, setState] = useState({
  //   menu: false,
  // });

  // const toggleMenu = () => {
  //   setState({ menu: !state.menu })
  // }

  // const show = state.menu ? 'show' : '';

  return (
    <React.Fragment>
      <div className='jumbotron text-center' style={{ marginBottom: 0 }}>
        <h1>My First Bootstrap 4 Page</h1>
        <p>Resize this responsive page to see the effect!</p>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
      </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className='container' style={{ marginTop: 30 }}>
        <div className="row">
          <div className="col-sm-4">
            <h2>About Me</h2>
            <h5>Photo of me:</h5>
            <div className="fakeimg" style={{ height: 200, background: '#aaa' }}>Fake Image</div>
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
            <h3>Some Links</h3>
            <p>Lorem ipsum dolor sit ame.</p>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a href="#" className="nav-link active">Active</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Link</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Link</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <hr className="d-sm-none" />
          </div>
          <div className="col-sm-8">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <div className="fakeimg" style={{ height: 200, background: '#aaa' }}>Fake Image</div>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <br />
            <h2>TITLE HEADING</h2>
            <h5>Title description, Sep 2, 2017</h5>
            <div className="fakeimg" style={{ height: 200, background: '#aaa' }}>Fake Image</div>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </div>
      </div>
      <div className="jumbotron text-center" style={{marginBottom:0}}>
        <p>Footer</p>
      </div>
    </React.Fragment>
  )
}

export default About;