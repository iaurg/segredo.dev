import React from 'react'
import { Link } from 'gatsby'
import logo from '../../../static/logos/logo-iaurg.png'
import * as S from './styled'

export default function Logo () {
  return (
    <Link to='/'>
      <S.Logo src={logo} width={40} alt='Logo' />
    </Link>
  )
}
