import React, { useEffect, useState } from 'react'
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import authenticationService from '../API/authenticationService';
import "../style.css"
const NavBar = () => {
    const [currentAccount, setCurrentAccount] = useState()
    useEffect(() => {
        setCurrentAccount(authenticationService.getCurrentAccountValue())
    }, [])

    const handleLogout = (e) => {
        authenticationService.logout()
        setCurrentAccount(undefined)
    }
    return (
        <div >
            <Navbar >
                <Navbar.Brand />
                <Navbar.Toggle />
                <Navbar.Collapse>
                    {currentAccount ?
                        // Nếu đang trong đăng nhập
                        <>
                            <Nav.Link id="about-nav-bar" href="/"> About</Nav.Link>
                            <NavDropdown title="Account" id="nav-dropdown-account">
                                <NavDropdown.Item href="/profile">Account</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/login" onClick={handleLogout}>Log out</NavDropdown.Item>
                            </NavDropdown>
                        </>
                        :
                        // Nếu chưa đăng nhập
                        <>
                            <Nav.Link href="/register"> Register</Nav.Link>
                            <Nav.Link href="/login"> Login</Nav.Link>
                        </>}

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}; export default NavBar