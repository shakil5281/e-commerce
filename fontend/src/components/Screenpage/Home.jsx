import React from 'react'
import axios from 'axios'
import { Col, Container, Row } from 'react-bootstrap'
import Product from '../tools/Product'

const Home = () => {

  const [product, setproduct] = React.useState([])
  const [data, setdata] = React.useState(false)

const loanproduct = async () =>{
  try{
    const {data} = await axios.get('https://fakestoreapi.com/products')
    setproduct(data)
    setdata(true)
  }catch(err){
    console.log('error')
  }
}

  React.useEffect(()=>{
    loanproduct()
  }, [])
  return (
    <>
      {
        data && 
        <main>
        <Container>
        <div className='my-4'>
            <h2>Letest Products</h2>
              <Row>
                {Array.from(product).map((product =>(
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