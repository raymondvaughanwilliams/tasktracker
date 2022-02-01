import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title , onAdd, showAdd}) => {

  return (
    <header className='header'>
      <h1> {title} </h1>
      <Button color={showAdd ? 'red' : 'Green'} onClick={onAdd} text={showAdd ? 'Close' : 'Add'}/>
    </header>
  )}

export default Header
 
Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// const hstyles = {
//     header: {
//         background: '#3353',
//         color: '#fff',
//         textAlign: 'center',
//         padding: '10px'
//     }   // end of header
// }