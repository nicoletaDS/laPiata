import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Dropdown.css';
import './DropdownMyProducts.css';

const DropdownMyProducts = ({ menuItems }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick} 
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        { menuItems.length == 0 ? <li>Adaugă produsele preferate la favorite.</li> : 
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
                    <div className={'img-col'}>
                      <img className='prod-img' src={item.img} alt='img'></img>
                    </div>
                    <div className={'title-col'}>
                      {item.title}
                    </div>
                    <div className='price-col'>
                      <div>{item.price}</div>
                      <Link to='/' className='delete'>X</Link>  
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

export default DropdownMyProducts;