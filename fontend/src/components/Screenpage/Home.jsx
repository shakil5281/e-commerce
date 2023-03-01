import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Row } from 'react-bootstrap'
import Product from '../tools/Product'
import { listProducts } from '../../actions/productAction'
import Loading from '../layout/Loading'
import Message from '../layout/Message'

const Home = () => {

  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const {loading, error, products} = productList




  React.useEffect(()=>{
    dispatch(listProducts())
  }, [dispatch])





  return (
    <>
      {
        loading ? <Loading /> : error ? <Message variant='danger'>{error}</Message> : 
        <main>
        <Container>
        <div className='my-4'>
            <h2>Letest Products</h2>
              <Row>
                {Array.from(products).map((product =>(
                  <Col sx={12} md={6} lg={4} xl={3} key={product.id}>
                    <Product product= {product} />
                  </Col>
                )))}
              </Row>
          </div>
        </Container>
      </main>
      }
    </>
  )
}

export default Home