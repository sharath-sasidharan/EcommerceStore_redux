import React from 'react'
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <div className='ui fixed menu'>
        <div className='ui container center'>
            <h1><Link title='Ecommerce store' to={'/'}>E-commerce Store </Link></h1>
        </div>
    </div>
  )
}
