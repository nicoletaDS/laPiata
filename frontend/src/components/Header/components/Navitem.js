import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navitem(props) {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    window.innerWidth < 960 ? setDropdown(false) : setDropdown(true)
  }
  const onMouseLeave = () => setDropdown(false)

  return (
    <Link 
      className={props.className}
      to={props.itemLink}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {props.itemName}
      {props.counter}
      {dropdown && props.dropdown}
      
    </Link>
  )
}

export default Navitem;
