import React from "react"

const Paragraphs = ({ children }) => (
  <>{children.split('\n').map((line, i) => <p key={i}>{line}</p>)}</>
)

export default Paragraphs
