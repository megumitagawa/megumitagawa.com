import React from "react"
import PropTypes from "prop-types"

import css from '../styles/svg-sprite-fluid.module.css'

const SvgSpriteFluid = ({ id }) => (
  <svg className={css.svgSpriteFluid}>
    <use xlinkHref={`#${id}`} />
  </svg>
)

SvgSpriteFluid.propTypes = {
  id: PropTypes.string.isRequired
}

export default SvgSpriteFluid
