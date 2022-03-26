import React from 'react'
import Layout from '../components/layout'

const ProductDetail = () => {
  return (
    <div>
      <Layout>
          <h1>GT-2040 Continuous Belt <br/>Laminator Model</h1>
        <div className='flex justify-center'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div className='w-96 h-16 px-6 bg-primary flex justify-end items-center'>GT-2040</div>
              <div className='w-96 h-16 px-6 bg-primary flex justify-end items-center'>GT-2040</div>
              <div className='w-96 h-16 px-6 bg-primary flex justify-end items-center'>GT-2040</div>
              <div className='w-96 h-16 px-6 bg-primary flex justify-end items-center'>GT-2040</div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default ProductDetail
