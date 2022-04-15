import React from 'react'
import {Link} from 'react-router-dom'

const ProductList = ({prodList}) => {
  return (
    <div>
        ProductList
        {prodList.map(el=>(
            <div key={el.id}><br/>
              <Link to={`/products/${el.id}`}>
           <p>{el.name}</p><br/><br/>
           </Link>
            </div>
        ))}

    </div>
  )
}

export default ProductList