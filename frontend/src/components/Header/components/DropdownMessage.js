import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Dropdown.css';
import './DropdownMessage.css';

const DropdownMessage = ({ menuItems }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick} 
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        style={{ width:'300px', left:'-275px' }}
      >
        { menuItems.length == 0 ? <li>Nu aveti mesaje.</li> : 
          <div>
            <li>CELE MAI NOI</li>
            { menuItems.map((item, index) => {
                return (
                <li key={index}>
                <Link
                    className={item.cName}
                    to={item.path}
                    onClick={() => setClick(false)}
                >
                  <div className='dropdown-row'>
                    <div className={item.isRead ? 'text-col read': 'text-col'}>
                      {item.sender} - {item.text}
                    </div>
                    <div className='date-col'>
                      {item.date}
                    </div>
                  </div>
                </Link>
                </li>
                );}
              )
            }
            <li>
                <Link
                    className='show-all' 
                    to='' 
                    onClick={() => setClick(false)}
                >
                    Afiseaza toate
                </Link>
            </li>
          </div>
        }
      </ul>
    </>
  );
}

export default DropdownMessage;