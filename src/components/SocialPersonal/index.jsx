import React from 'react'
import styled from 'styled-components'
import { FiTwitter, FiGithub } from 'react-icons/fi'
import config from '../../../config/website'

const Block = styled.div`
    display:flex;
    justify-content:space-between;
`

const Link = styled.a`
    color:#fff;
    margin:0 16px;
    font-size:23px;
`

export default function SocialPersonal () {
  return (
    <Block>
      <Link href={config.userLinks[1].url} target='_blank' rel='noopener noreferrer'>
        <FiTwitter />
      </Link>
      <Link href={config.userLinks[0].url} target='_blank' rel='noopener noreferrer'>
        <FiGithub />
      </Link>
    </Block>
  )
}
