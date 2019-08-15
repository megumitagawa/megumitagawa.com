/**
 * Receives non-HTML plain string
 * Divide with consecutive newline characters and enclose with p tag
 * Non-consecutive newline characters are replaced with br tag
 */

import React from "react"
import PropTypes from "prop-types"

const Paragraphs = ({ contents }) => {
  const paragraphs = contents
    .split(/(\r\n|\n|\r){2,}/)
    // Remove because of including unnecesary newline characters
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split#Description
    .filter(content => content !== '\n')
  const paragraphsWithBr = paragraphs.map((paragraph, i) => {
    const lines = paragraph.split(/\r\n|\n|\r/)
    const linesWithBr = lines.map((line, j) => {
      const br = j ? <br /> : <React.Fragment />
      return <React.Fragment key={j}>{br}{line}</React.Fragment>
    })
    return <p key={i}>{linesWithBr}</p>
  })
  return <>{paragraphsWithBr}</>
}

Paragraphs.propTypes = {
  contents: PropTypes.string.isRequired
}

export default Paragraphs
