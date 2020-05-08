import React from 'react'
import Layout from '../layout'
import Helmet from 'react-helmet'
// Use transition to show posts
// import {useTransition, animated} from 'react-spring'

export default () => {
  return (
    <Layout>
      <Helmet title='Blog' />
      Posts
    </Layout>
  )
}
