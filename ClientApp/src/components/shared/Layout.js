import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Layout(props) {
    return (
        <div>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand style={{ color: "black" }}>
                        Video Games Catalog
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Container>
            </Navbar>
            <Container style={{ marginTop: "20px" }}>{props.children}</Container>

            <style jsx>{`
        div {
          background-color: #f8f8f8;
          padding: 20px;
          border-radius: 5px;
        }
      `}</style>
        </div>
    );
}

export default Layout;