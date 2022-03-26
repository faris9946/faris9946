import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import '../styles/CallUs.css'

import location from '../images/location2.png'
import whatsapp from '../images/whatsapp2.png'
import mail from '../images/mail2.png'
import phone from '../images/phone2.png'

const CallUs = () => {
  return (
    <div className='bg-lightGrey'>
      <Layout>
          <div className='flex justify-center'>
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-10'>
                  <div className='column1Call bg-white flex items-center justify-end'>
                    <div>
                      <h1 className='titleCall text-start'>Contact Us</h1>
                      
                      <div className='addressDiv flex items-start justify-end pb-2'>
                        <h1 className='addressTextCall text-right'>  Jeddah - Al-Hindawiya -<br/>Al-Dahab Street,<br/>opposite Al-Rajhi Bank</h1>
                        <img className='xl:w-4' src={location} alt='icons' />
                      </div>
                      <div className='addressDiv flex items-center justify-end pb-2'>
                        <h1 className='addressTextCall text-right'>0096605324447438</h1>
                        <img className='xl:w-5' src={whatsapp} alt='icons' />
                      </div>
                      <div className='addressDiv flex items-center justify-end pb-2'>
                        <h1 className='addressTextCall text-right'>ramasko33@gmail.com</h1>
                        <img className='xl:w-5' src={mail} alt='icons' />
                      </div>
                      <div className='addressDiv flex items-start justify-end pb-2'>
                        <h1 className='addressTextCall text-right'>  +9660532447438<br/>+966551161149</h1>
                        <img className='xl:w-5' src={phone} alt='icons' />
                      </div>

                    </div>
                  </div>

                  <div className='column2Call col-span-2 flex justify-start '>
                    <div>
                      <h1 className='titleGetCall'>Get in Touch</h1>
                      <h1 className='subTitleGetCall'>Feel free to drop us aline below!</h1>

                      <form className="">
                        <div className="my-4">
                          <input className="textFieldCall shadow appearance-none  py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
                        </div>
                        <div className="mb-1">
                          <input className="textFieldCall shadow appearance-none  py-4 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
                        </div>
                        <div className="mb-4">
                          <textarea className="textAreaCall shadow appearance-none  py-4 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
                        </div>
                        <Link to="/Products/" className= "first-letter: text-sm lg:text-base font-bold text-white py-3 rounded-lg px-10 text-center bg-primary hover:font-bold  underline-offset-2 decoration-2">
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
