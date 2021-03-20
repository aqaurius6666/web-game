import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/Home' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/login' activeStyle>
                        Login
                    </NavLink>
                    <NavLink to='/register' activeStyle>
                        register
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    
                </NavBtn>
            </Nav>
        </>
    )
}; export default NavBar
