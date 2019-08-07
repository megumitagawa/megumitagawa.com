import { Link } from "gatsby"
import React from "react"

const Nav = () => (
  <nav>
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
          soundcloud
        </a>
      </li>
      <li>
        <a
          href="http://megcomp.blog38.fc2.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          blog
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
  </nav>
)

export default Nav
