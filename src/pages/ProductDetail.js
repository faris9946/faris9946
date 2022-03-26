import React from 'react'
import Layout from '../components/layout'

import logo from '../images/logo3.png'

const ProductDetail = () => {
  return (
    <div>
      <Layout>
          <h1>GT-2040 Continuous Belt <br/>Laminator Model</h1>
          <div>
            <img class="float-left" src={logo} />
            <p>A continuous flow thermal wrapping machine from Ramasco for packaging systems. The machine works on 
              packaging boxes, cartons, gifts and other safe packaging that makes the product closed and is only 
              opened by the customer for the quality and safety of the product. Thermal shrink machine is a manual 
              use. The bags are cut externally, and after cutting and packaging, the machine is fed. Manually to start
               the thermal shrinkage process by continuous walking  The thermal shrink machine with a high temperature
                reaches a temperature of 400 degrees and starts from 200 degrees with the possibility of controlling 
                the temperature and speed of the GT-2040</p>
          </div>
        
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
