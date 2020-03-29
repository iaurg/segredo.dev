import React from "react"
import * as S from "./styled"
import { Link } from "gatsby"
import logo from "./images/logo-iaurg.png"

export default function Menu() {
  return (
    <S.Nav>
      <Link to="/">
        <S.Logo src={logo} width={40} alt="Logo" />
      </Link>
      <S.Menu>
        <Link to="/">Inicio</Link>
        <Link to="/contato">Contato</Link>
      </S.Menu>
    </S.Nav>
  )
}
