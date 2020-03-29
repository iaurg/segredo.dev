import React from "react"
import Header from "../Header"
import GlobalStyles from "../../styles/global"
import * as S from "./styled"
export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <S.LayoutMain>{children}</S.LayoutMain>
    </>
  )
}
