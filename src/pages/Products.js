import React from 'react'
import Layout from '../components/layout'

import product1 from '../images/img1.png'

const Products = () => {
  return (
    <div>
      <Layout>

        <div className='flex justify-center pt-24'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                <div className='bg-white w-auto sm:w-60 h-66 shadow-lg rounded-2xl p-6'>
                    <img src={product1} alt='Pro' />
                    <h1 className = "text-center pt-3">Semi-automatic 2-in-1 thermal laminating and cutting machine</h1>
                </div>
                <div className='bg-white w-auto sm:w-60 h-66 shadow-lg rounded-2xl p-6'>
                    <img src={product1} alt='Pro' />
                    <h1 className = "text-center pt-3">Semi-automatic 2-in-1 thermal laminating and cutting machine</h1>
                </div>
            </div>
        </div>

      </Layout>
    </div>
  )
}

export default Products
