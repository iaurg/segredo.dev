import React from 'react'
import Layout from '../layout'
import Quotes from '../components/Quotes'
import CanvasAnimation from '../components/CanvasAnimation'
export default () => {
  return (
    <Layout>
      <Quotes quote='Ter vivido o suficiente não depende nem de nossos anos, nem de
nossos dias, mas de nossas mentes.'
      />
      <CanvasAnimation />
      <div>
        <h4>Posts</h4>
      </div>
    </Layout>
  )
}
