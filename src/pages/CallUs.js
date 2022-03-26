import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import location from '../images/location.png'

const CallUs = () => {
  return (
    <div>
      <Layout>
          <div className='flex justify-center'>
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-10'>
                  <div className='bg-primary w-72 h-96'>
                    <div>
                      <h1 className='text-center'>Contact us</h1>
                      <div className='flex items-start justify-end'>
                        <h1 className='text-right'>  Jeddah - Al-Hindawiya -<br/>Al-Dahab Street,<br/>opposite Al-Rajhi Bank</h1>
                        <img src={location} alt='' />
                      </div>
                      <div className='flex items-start justify-end'>
                        <h1 className='text-right'>0096605324447438</h1>
                        <img src={location} alt='' />
                      </div>
                      <div className='flex items-start justify-end'>
                        <h1 className='text-right'>ramasko33@gmail.com</h1>
                        <img src={location} alt='' />
                      </div>
                      <div className='flex items-start justify-end'>
                        <h1 className='text-right'>  +9660532447438<br/>+966551161149</h1>
                        <img src={location} alt='' />
                      </div>
                    </div>
                  </div>

                  <div className='col-span-2 flex justify-start '>
                    <div>
                      <h1>get in Touch</h1>
                      <h1>feel free to drop us aline below!</h1>

                      <form class="">
                        <div class="my-4">
                          <input class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
                        </div>
                        <div class="mb-1">
                          <input class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
                        </div>
                        <div class="mb-4">
                          <textarea class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
                        </div>
                        <Link to="/Products/" className= "first-letter: text-sm lg:text-base font-bold text-white py-2 px-8 text-center bg-primary hover:font-bold rounded-xl  underline-offset-2 decoration-2">
                          Sent
                        </Link>
                        </form>
                    </div>

                    
                      
                          
                  </div>
              </div>

              
          </div>
          
      </Layout>
    </div>
  )
}

export default CallUs
