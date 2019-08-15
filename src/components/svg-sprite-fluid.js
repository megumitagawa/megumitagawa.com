import React from "react"

import css from '../styles/svg-sprite-fluid.module.css'

const SvgSpriteFluid = ({ id }) => (
  <svg className={css.svgSpriteFluid}>
    <use xlinkHref={`#${id}`} />
  </svg>
)

export default SvgSpriteFluid
