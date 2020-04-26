import React from 'react'
import * as S from './styled'
import Menu from '../Menu'
import Logo from '../Logo'

export default function Header () {
  return (
    <S.Header>
      <Logo />
      <Menu />
    </S.Header>
  )
}
