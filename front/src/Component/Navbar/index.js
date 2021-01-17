import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements"
import Login from '../Login';


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/"> 
                    <h1>Workout Buddies</h1>
                </NavLink>
                <Bars />

                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>

                    <NavLink to="/profile" activeStyle>
                        Your Profile
                    </NavLink>
                    {/*<NavBtnLink to="/signin">Sign In</NavBtnLink>*/}
                    <Login />
                </NavMenu>

                {/*<NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>*/}
            </Nav>
        </>
    )
}

export default Navbar;