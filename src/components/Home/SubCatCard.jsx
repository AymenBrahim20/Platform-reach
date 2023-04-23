import React from 'react'

import { Link } from 'react-router-dom';


function SubCatCard ({item}) {
   

  return (
        <Link to={`subshop/${item._id}`}>
    <div  className='subCatCard'>
    <img className='subCatImg ' src={item.files}    alt=''/>
    <span className='subCatDesc'>{item.description}</span>
    <span className='subCatTitle'>{item.name}</span>


    </div>
    </Link>
  )
}
export default SubCatCard
