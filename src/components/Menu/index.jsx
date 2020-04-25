import React from 'react'
import { Link } from 'gatsby'
import { FiHome, FiFileText, FiUser, FiMail } from 'react-icons/fi'
import * as S from './styled'

export default function Menu () {
  return (
    <S.Nav>
      <S.Menu>
        <S.MenuItem><Link to='/'><FiHome /></Link></S.MenuItem>
        <S.MenuItem><Link to='/blog'><FiFileText /></Link></S.MenuItem>
        <S.MenuItem><Link to='/sobre'><FiUser /></Link></S.MenuItem>
        <S.MenuItem><Link to='/contato'><FiMail /></Link></S.MenuItem>
      </S.Menu>
    </S.Nav>
  )
}
