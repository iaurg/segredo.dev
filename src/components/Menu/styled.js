import styled from "styled-components"

export const Nav = styled.nav`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
  border-radius: 5px;
`

export const Menu = styled.nav`
  a {
    color: #fff;
    text-decoration: none;
    padding: 0 20px;
    &:hover {
      background: #ccc;
    }
  }
`
