import React from "react"
import PropTypes from "prop-types"
import Paragraphs from "./paragraphs"

const Sections = ({ HeadingTag, contents }) => {
  const sections = contents.map((section, i) => (
    <section key={i}>
      <HeadingTag>{section.heading}</HeadingTag>
      <Paragraphs contents={section.body} />
    </section>
  ))
  return <>{sections}</>
}

Sections.propTypes = {
  HeadingTag: PropTypes.string.isRequired,
  contents: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Sections
