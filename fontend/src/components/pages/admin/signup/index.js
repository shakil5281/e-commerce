import React from 'react'
import {  Button, Col, Container, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'
import { Form } from 'react-router-dom'

const Signup = () => {
  return (
    <>
      <Container style={{ height: '80vh', paddingTop: 50 }} className='my-4'>
        <Row className='justify-content-md-center'>
          <Col xs={12} md={6}>
            <h1>Register Form</h1>
            <Form>
              <FormGroup className='my-2'>
                <FormLabel>Full Name:</FormLabel>
                <FormControl type='email' />
              </FormGroup>
              <FormGroup className='my-2'>
                <FormLabel>Email:</FormLabel>
                <FormControl type='email' />
              </FormGroup>
              <FormGroup className='my-2'>
                <FormLabel>Password:</FormLabel>
                <FormControl type='password' />
              </FormGroup>
              <FormGroup className='my-2'>
                <Button type='submit'>Sign Up</Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Signup