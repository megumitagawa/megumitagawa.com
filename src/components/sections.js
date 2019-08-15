import React from "react"
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

export default Sections
