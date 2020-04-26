import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'

export default () => {
  return (
    <Layout>
      <Helmet title='Sobre' />
      <div>
        <h2>Objetivos pessoais</h2>
        <p>
            Busca de excelência. Nenhum homem pode viver uma vida feliz, ou mesmo uma vida suportável, sem o estudo da sabedoria; você sabe também que uma vida feliz é alcançada quando a nossa sabedoria é levada ao auge, mas que a vida é pelo menos suportável, mesmo quando a nossa sabedoria apenas começa. "Mantenha-se forte, mantenha-se bem." - Sêneca / Cartas de um Estoico, Volume I.
        </p>

        <h2>Objetivos profissionais</h2>
        <p>
            Meu objetivo a longo prazo é me tornar um programador capaz de enfrentar qualquer desafio, quero ser quem cria e executa
            projetos de alta complexidade. Para isso eu criei minha própria grade de estudos visando dominar a ciência da computação.
          <a href='https://github.com/iaurg/Computer-Science-Study' target='_blank' rel='noopener noreferrer'>
                Neste repositório
          </a>
            estão todos os materiais, exercícios, desafios, resumos e projetos que estou estudando.
        </p>
      </div>
    </Layout>
  )
}
