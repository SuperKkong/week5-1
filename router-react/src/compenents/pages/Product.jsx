import React from 'react'
import { useParams } from 'react-router'
export const Product = () => {
    let param = useParams()
  return (
    <div>
        Product :id{param.id}
    </div>
  )
}

export default Product