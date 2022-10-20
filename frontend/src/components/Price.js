import React from 'react'

import './Price.css'

function Price({ unity_price, sell_by}) {
    // return a parsed price
    // ex: for unity_price=7.50 returns 7^50

    let lei = unity_price;
    let bani = unity_price % 1;

    if (bani == 0) {
        bani = '00';
    } else {
        lei = lei - bani;
        bani = bani * 100;
    }

    
  return (
    <p className='price'>
        {lei} <span>{bani}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; lei/{sell_by}
    </p>
  )
}

export default Price;
