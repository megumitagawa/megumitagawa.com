import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Nav = ({ active }) => (
  <nav
    className={`
      nav
      ${active ? 'is-active' : ''}
    `}
  >
    <ul>
      <li>
        <Link to="/profile/">profile</Link>
      </li>
      <li>
        <Link to="/works/">works</Link>
      </li>
      <li>
        <a
          href="https://soundcloud.com/megumi-tagawa"
          target="_blank"
          rel="noopener noreferrer"
        >
          sounds
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/gushime"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>
      </li>
      <li>
        <a href="mailto:mgs1104@me.com">contact</a>
      </li>
    </ul>
    <button />
  </nav>
)

Nav.propTypes = {
  active: PropTypes.bool.isRequired
}

export default Nav
