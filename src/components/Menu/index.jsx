import React from 'react'
import { Link } from 'gatsby'
import { FiHome, FiFileText, FiUser, FiMail } from 'react-icons/fi'
import * as S from './styled'

export default function Menu () {
  return (
    <S.Nav>
      <S.Menu>
        <S.MenuItem><Link to='/' activeClassName='active'><FiHome /></Link></S.MenuItem>
        <S.MenuItem><Link to='/blog' activeClassName='active'><FiFileText /></Link></S.MenuItem>
        <S.MenuItem><Link to='/sobre' activeClassName='active'><FiUser /></Link></S.MenuItem>
        <S.MenuItem><Link to='/contato' activeClassName='active'><FiMail /></Link></S.MenuItem>
      </S.Menu>
    </S.Nav>
  )
}
