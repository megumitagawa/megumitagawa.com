import React from "react"
import PropTypes from "prop-types"
import SvgSpriteFluid from "./svg-sprite-fluid"

import css from '../styles/dotted-line.module.css'
import dotsSvg from '../images/dots.svg'

const DottedLine = ({ children }) => (
  <span className={css.dottedLine}>
    <span className={css.dots}>
      <SvgSpriteFluid id={dotsSvg.id} />
    </span>
    <span className={css.text}>
      {children}
    </span>
    <span className={css.dots}>
      <SvgSpriteFluid id={dotsSvg.id} />
    </span>
  </span>
)

DottedLine.propTypes = {
  children: PropTypes.node.isRequired
}

export default DottedLine
