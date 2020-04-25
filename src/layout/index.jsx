import React from 'react'
import Helmet from 'react-helmet'
import config from '../../config/website'
import GlobalStyles from '../styles/global'
import * as S from './styled'
import Header from '../components/Header'

export default function Layout ({ children }) {
  return (
    <>
      <Helmet>
        <meta name='description' content={config.siteDescription} />
        <html lang='pt' />
      </Helmet>
      <GlobalStyles />
      <Header />
      <S.LayoutMain>{children}</S.LayoutMain>
    </>
  )
}
