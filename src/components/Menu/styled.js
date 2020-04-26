import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content:center;
`

export const Menu = styled.ul`
  list-style:none;  
  display:flex;
  padding:0;
  margin:0;
`
export const MenuItem = styled.li`
  a {
    color: #fff;
    border-radius:30px;
    padding: 16px;
    margin:0 5px;
    display: block;
    background-color:#212121;  
    font-size: 23px;
    height: 55px;
    width: 55px;  
    &.active {
      ::after
      {
        content:'';
        color: cadetblue;
        text-decoration: underline;
        width:8px;
        height:8px;
        background-color:#fff;
        border-radius:10px;
        display: block;
        position: relative;
        margin: 0 auto;
        bottom: -30%;
      }
    }
    &:hover {
      background: #4c4c4c;
    }
  }
    
}`
