import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom'; 
import { menuData } from "../data/MenuData";

const Nav = styled.nav`
  height: 60px;

  background: red;
`;

const Logo = styled(Link)` //change to Link later
  color: #ffffff;
`;

const MenuBars = styled.i``;

const NavMenu = styled.div``;

const NavMenuLinks = styled(Link)`
`; 

const Navbar = () => {
  return (
    <Nav>
      <Logo to="https://github.com/chrismochinski">ELIXR</Logo>
      <MenuBars />
      <NavMenu>
            {menuData.map((thingy, index) => {
                <NavMenuLinks to={thingy.link} key={index}>
                    {thingy.title}
                </NavMenuLinks>
            })}
      </NavMenu>

      <h1>Navbar</h1>
    </Nav>
  );
};

export default Navbar;
