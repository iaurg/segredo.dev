---
to: src/components/<%= name %>/<%= name %>.jsx
---
import React from 'react'
import * as S from './styled'
<% if(locals.props){ -%>
import PropTypes from 'prop-types'
<% } -%>

export default function <%= name %> () {
  return (<div />)
}

<% if(locals.props){ -%>
<%= name %>.propTypes = {
}
<% } -%>