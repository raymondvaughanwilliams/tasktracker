import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color,text,onClick}) => {
 
  return <button onClick={onClick} style={
      {backgroundColor: color,}
  } className='btn' >{text}</button>
 
}

export default Button

Button.defaultProps = {
    color: 'blue',
    text: 'Add'
}

Button.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}