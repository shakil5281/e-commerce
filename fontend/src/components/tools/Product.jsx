import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const Product = ({product}) => {
  return (
    <div>
        <Card className='my-3 p-3 rounded' >
            <Link to={`/product/${product.id}`}>
                <Card.Img style={{height: '20rem'}} src= {product.image} variant='top' />
            </Link>
            <Card.Body>
            <Link to={`/product/${product.id}`}>
                <Card.Title as='div'>
                    <strong>{product.title}</strong>
                </Card.Title>
            </Link>
            <Card.Text as='div' className='d-flex justify-content-between'>
                {product.category}
                <span>
                    rating: {product.rating.rate}
                </span>

            </Card.Text>
            <Card.Text as='h3'>
                ${product.price}
            </Card.Text>

            </Card.Body>
        </Card>
    </div>
  )
}

export default Product