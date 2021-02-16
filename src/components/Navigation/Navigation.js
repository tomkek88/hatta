import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationWrapper = styled.nav`
  display: flex;
  position: absolute;
  top: 20px;
  left: 30px;
  align-items: center;
  justify-content: flex-start;
  font-family: "Montserrat";
  a {
    text-decoration: none;
    color: inherit;
  }
`

const Logo = styled.span`
  font-weight: 700;
  margin-right: 10px;
`
const NavigationMenu = styled.ul`
  list-style: none;
  display: flex;
`
const NavigtionMenuItem = styled.li`
  font-weight: 600;
  font-size: 15px;
  margin-left: 32px;
`

const Navigation = () => {
  return (
    <NavigationWrapper>
      <Logo>
        <Link to="/">HATTA</Link>
      </Logo>
      <NavigationMenu>
        <NavigtionMenuItem>
          <Link to="/articles">articles</Link>{" "}
        </NavigtionMenuItem>
        <NavigtionMenuItem>
          <Link to="/about">about</Link>{" "}
        </NavigtionMenuItem>
        <NavigtionMenuItem>
          <Link to="/gallery">gallery</Link>
        </NavigtionMenuItem>
        <NavigtionMenuItem>
          <Link to="/contact">contact</Link>
        </NavigtionMenuItem>
      </NavigationMenu>
    </NavigationWrapper>
  )
}

export default Navigation
