import React from 'react'
import * as S from './styled'
import Menu from '../Menu'
import Logo from '../Logo'
import SocialPersonal from '../SocialPersonal'

export default function Header () {
  return (
    <S.Header>
      <Logo />
      <Menu />
      <SocialPersonal />
    </S.Header>
  )
}
