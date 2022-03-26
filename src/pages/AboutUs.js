import React from 'react'
import Layout from '../components/layout'
import '../styles/AboutUs.css'

const AboutUs = () => {
  return (
    <div className='bg-lightGrey'>
      <Layout>
          <div className='AboutUs flex justify-center'>
              <div className='roundRectangleAbout xl:max-w-6xl 2xl:max-w-7xl lg:max-w-5xl md:max-w-3xl mx-auto px-4 sm:px-6 bg-white text-black flex justify-center items-center'>
                <div>
                  <h1 className='titleAbout text-center'>ABOUT US</h1>
                  <h1 className='subTitleAbout'>We are Ramasco Corporation for Packaging Technology Systems . Specialized in importing and 
                      selling industrial machines, packaging, PVC nylon bags  ,  PUF  packaging bags, and  OPP perfume 
                      packaging bags .  We also customize bags according to sizes and according to demand. and plastic 
                      cans). We have thermal cutting machines of all sizes, filling machines for liquids, perfumes, 
                      creams and sticky materials. We have spare parts and maintenance.</h1>
                </div>
              </div>
          </div>
      </Layout>
    </div>
  )
}

export default AboutUs
