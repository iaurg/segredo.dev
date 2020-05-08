import React from 'react'
import * as S from './styled'
import PropTypes from 'prop-types'

export default function Quotes ({ quote }) {
  return (
    <S.Box>
      {quote}
    </S.Box>
  )
}

Quotes.propTypes = {
  quote: PropTypes.string.isRequired
}
