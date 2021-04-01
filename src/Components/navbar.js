import React, { useEffect, useState } from 'react'
import { Nav, Navbar } from "react-bootstrap";
import authenticationService from '../API/authenticationService';

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
        <div className="header">
            <Navbar>
                <Navbar.Brand />
                <Navbar.Toggle />
                <Navbar.Collapse>
                    {currentAccount ?
                        // Nếu đang trong đăng nhập
                        <>
                            <Nav.Link href="/"> About</Nav.Link>
                            <Nav.Link href="/login" onClick={handleLogout}> Logout</Nav.Link>
                            <Nav.Link href="/profile">Account</Nav.Link>
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