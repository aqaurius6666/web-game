import React, { useEffect, useState } from 'react'
import { Modal, Nav, Navbar, NavDropdown } from "react-bootstrap";
import authenticationService from '../API/authenticationService';
import "../style.css"



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
    return (
        <div >
            <Navbar className="nav-bar-frame">
                <br></br>
                <Navbar.Brand />
                <Navbar.Toggle />
                <Navbar.Collapse>
                    {currentAccount ?
                        // Nếu đang trong đăng nhập
                        <>
                            <Nav.Link className="col-md-8" href="/"> About</Nav.Link>
                            <div className="nav-account-frame row">
                                <a className="col-md-3" onClick={(e) => setShowModal(true)}>
                                    <img width="40px" height="40px" src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/158085211_1100336053705102_5231267126405112858_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=RNJuGosefWQAX8Y8mYa&_nc_ht=scontent-hkt1-1.xx&oh=caa7e7cf3b85131c1904f2ea1f97bce0&oe=60917E21" href="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/158085211_1100336053705102_5231267126405112858_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=RNJuGosefWQAX8Y8mYa&_nc_ht=scontent-hkt1-1.xx&oh=caa7e7cf3b85131c1904f2ea1f97bce0&oe=60917E21"></img>
                                </a>
                                <NavDropdown className="col-md-6" id="nav-dropdown-account">
                                    <NavDropdown.Item className="dropdown-item" href="/profile">Account</NavDropdown.Item>
                                    <NavDropdown.Divider className="dropdown-item"/>
                                    <NavDropdown.Item className="dropdown-item" href="/login" onClick={handleLogout}>Log out</NavDropdown.Item>
                                </NavDropdown>
                            </div>
                        </>
                        :
                        // Nếu chưa đăng nhập
                        <>
                            <Nav.Link href="/register"> Register</Nav.Link>
                            <Nav.Link href="/login"> Login</Nav.Link>
                        </>}

                </Navbar.Collapse>
            </Navbar>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Body>
                    <img width="100%" height="100%" src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/158085211_1100336053705102_5231267126405112858_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=RNJuGosefWQAX8Y8mYa&_nc_ht=scontent-hkt1-1.xx&oh=caa7e7cf3b85131c1904f2ea1f97bce0&oe=60917E21"></img>
                </Modal.Body>
            </Modal>
        </div>

    )
}; export default NavBar