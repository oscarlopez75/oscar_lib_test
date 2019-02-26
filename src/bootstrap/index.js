import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Bootstrap = props => {
  const { title, message } = props
  return (
    <div className='text-center'>
      <div className='jumbotron'>
        <h1>{title}</h1>
        <h4>{message}</h4>
      </div>
    </div>
  )
}

Bootstrap.defaultProps = {
  title: 'I am the index at Bootstrap',
  message: 'Default message'
}

export default Bootstrap
