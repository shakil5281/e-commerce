import React from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { Card, Container, Row, Col, ListGroup, Button } from 'react-bootstrap'
import { MdOutlineKeyboardBackspace } from 'react-icons/md';


function UserProfile() {
  let params = useParams()

  const [product, setproduct] = React.useState([])

  const loanproduct = async () => {
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
      setproduct(data)
    } catch (err) {
      console.log('error')
    }
  }

  React.useEffect(() => {
    loanproduct()
  }, [])
  return (
    <div>
        <Container >
          <Link className='btn btn-light my-3' to='/'>
            Go Back <MdOutlineKeyboardBackspace/>
          </Link>
          <Row>
            <Col md={6} className='justify-center'>
              <Card style={{padding: '100px', height: '600px', border: "none"}}>
                <img style={{width: "300px", margin: "0 auto"}} src={`${product.image}`} alt='Product' />
              </Card>
            </Col>
            <Col className='my-4' md={4}>
                <ListGroup.Item>
                  <h4>{product.title}</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h6>{product.description}</h6>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h4>Product Price: ${product.price}</h4>
                </ListGroup.Item>
                <ListGroup.Item className='my-4 d-flex'>
                  <div className='mx-4 border'>
                    <Button variant="light" >+</Button>
                    <Button disabled variant="light">1</Button>
                    <Button variant="light" >-</Button>
                    </div>
                  <Button>Add to Cart</Button>
                </ListGroup.Item>

            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default UserProfile