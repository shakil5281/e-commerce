import React from 'react'
import Singleproduct from './pages/singleproduct'

const Products = ({match}) => {
    const product = Singleproduct.find((p)=> p.id === match.params.id)
  return (
    <>
        {product.id}
    </>
  )
}

export default Products