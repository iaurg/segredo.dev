import React from 'react'
import * as S from './styled'
import Menu from '../Menu'

export default function Header () {
  return (
    <S.Header>
      <S.Container>
        <Menu />
      </S.Container>
    </S.Header>
  )
}
