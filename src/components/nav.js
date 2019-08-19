import React from "react"
import { Link } from "gatsby"
import DottedLine from "./dotted-line"
import SvgSpriteFluid from "./svg-sprite-fluid"

import css from "../styles/nav.module.css"
import dotsSvg from "../images/dots.svg"

const Nav = () => (
  <nav className={css.nav}>
    <ul className={css.list}>
      <li className={css.item}>
        <Link to="/profile/">
          <DottedLine>profile</DottedLine>
        </Link>
      </li>
      <li className={css.item}>
        <Link to="/works/">
          <DottedLine>works</DottedLine>
        </Link>
      </li>
      <li className={css.item}>
        <a
          href="https://soundcloud.com/megumi-tagawa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DottedLine>sounds</DottedLine>
        </a>
      </li>
      <li className={css.item}>
        <a
          href="https://twitter.com/gushime"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DottedLine>twitter</DottedLine>
        </a>
      </li>
      <li className={css.item}>
        <a href="mailto:mgs1104@me.com">
          <DottedLine>contact</DottedLine>
        </a>
      </li>
    </ul>
    <Link to="/" className={css.trigger}>
      <SvgSpriteFluid id={dotsSvg.id} />
    </Link>
  </nav>
)

export default Nav
