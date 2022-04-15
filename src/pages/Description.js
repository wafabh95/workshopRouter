import React from 'react'
import {useParams,useLocation} from 'react-router-dom'
import queryString from 'query-string'


const Description = ({prodList}) => {
    const params=useParams()
    const location=useLocation()
    console.log(params)
    console.log(location)
    const myQuerry = queryString.parse(location.search)
    console.log(myQuerry)
    const product= prodList.find(el=>el.id === +params.prodId)
  return (
    <div>Description
        {product.desc}
    </div>
  )
}

export default Description