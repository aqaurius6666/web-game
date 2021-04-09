import React, { useEffect, useState } from 'react'
import { Modal, Nav, Navbar, NavDropdown } from "react-bootstrap";
import authenticationService from '../API/authenticationService';



const NavBar = () => {
    const [currentAccount, setCurrentAccount] = useState()
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        setCurrentAccount(authenticationService.getCurrentAccountValue())
    }, [])

    const handleLogout = (e) => {
        authenticationService.logout()
        setCurrentAccount(undefined)
    }
    if (currentAccount) {
        return (
            <>
                <Navbar className="row frame navbar-dark" expand="lg">
                    <Navbar.Toggle className="ml-5 toggle-navbar" aria-controls="navbar-nav" />

                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="row" className="ml-5">
                            <Nav.Link href="/" >Home</Nav.Link>
                            <Nav.Link href="/"> Browser</Nav.Link>
                            <Nav.Link href="/"> Communication</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="row mr-5">
                        <a onClick={(e) => setShowModal(true)}>
                            <img width="40px" height="40px" src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/158085211_1100336053705102_5231267126405112858_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=RNJuGosefWQAX8Y8mYa&_nc_ht=scontent-hkt1-1.xx&oh=caa7e7cf3b85131c1904f2ea1f97bce0&oe=60917E21" href="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/158085211_1100336053705102_5231267126405112858_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=RNJuGosefWQAX8Y8mYa&_nc_ht=scontent-hkt1-1.xx&oh=caa7e7cf3b85131c1904f2ea1f97bce0&oe=60917E21"></img>
                        </a>
                        <NavDropdown>
                            <NavDropdown.Item href="/profile">Account</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/login" onClick={handleLogout}>Log out</NavDropdown.Item>
                        </NavDropdown>
                    </div>

                </Navbar>

                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Body>
                        <img width="100%" height="100%" src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/158085211_1100336053705102_5231267126405112858_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=RNJuGosefWQAX8Y8mYa&_nc_ht=scontent-hkt1-1.xx&oh=caa7e7cf3b85131c1904f2ea1f97bce0&oe=60917E21"></img>
                    </Modal.Body>
                </Modal>
            </>
        )
    } else {
        return (
            <>
                <Navbar className="nav-bar">
                    <div className="nav-bar-frame row" expand="lg">
                        <Navbar className="col-10">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto row">
                                    <Nav.Link href="/"> Home</Nav.Link>
                                    <Nav.Link href="/"> Browser</Nav.Link>
                                    <Nav.Link href="/"> Communication</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <Navbar className="col-2">
                            <a onClick={(e) => setShowModal(true)}>
                                <img width="40px" height="40px" src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/158085211_1100336053705102_5231267126405112858_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=RNJuGosefWQAX8Y8mYa&_nc_ht=scontent-hkt1-1.xx&oh=caa7e7cf3b85131c1904f2ea1f97bce0&oe=60917E21" href="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/158085211_1100336053705102_5231267126405112858_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=RNJuGosefWQAX8Y8mYa&_nc_ht=scontent-hkt1-1.xx&oh=caa7e7cf3b85131c1904f2ea1f97bce0&oe=60917E21"></img>
                            </a>
                            <NavDropdown id="nav-dropdown-account">
                                <NavDropdown.Item className="dropdown-item" href="/login" onClick={handleLogout}>Login</NavDropdown.Item>
                                <NavDropdown.Item className="dropdown-item" href="/register" onClick={handleLogout}>Register</NavDropdown.Item>
                            </NavDropdown>
                        </Navbar>
                    </div>
                </Navbar>
            </>
        )
    }
}; export default NavBar