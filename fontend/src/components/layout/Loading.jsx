import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loading = () => {
  return (
    <>
    <div style={{
      height: '100vh',
    }}>
    <Spinner
    animation='border'
    role= 'status'
    style={{
      width: '100px',
      height: '100px',
      display: 'block',
      position: 'absolute',
      bottom: '50%',
      left: '50%',
    }}

    >
      {/* <span className='sr-only'>Loading...</span> */}
    </Spinner>
    </div>
    </>
  )
}

export default Loading