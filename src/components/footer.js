import React from 'react'
import '../styles/Footer.css'

import location from '../images/location.png'
import whatsapp from '../images/whatsapp.png'
import phone from '../images/phone.png'
import mail from '../images/mail.png'
import logo3 from '../images/logo3.png'
import spBoxLogo from '../images/sp.png'

const Footer = () => {
  return (
    <div>
      <div className='Footer bg-darkGrey text-white'>

        <div className='flex justify-center items-center xl:py-9'>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-12'>

            <div className='column1Footer'>
              <div className='flex justify-start'>
                <img className='logoFooter' src={logo3} alt='' />
              </div>
              <div className='flex justify-start'>
                <img className='spLogoFooter' src={spBoxLogo} alt='' />
              </div>
            </div>

            <div className='column2Footer flex items-center justify-end col-span-2'>
              <div>
                <div className='flex items-start justify-end pb-5'>
                  <h1 className='addressTextFooter text-right'> Jeddah - Al-Hindawiya - Al-Dahab Street,<br></br>opposite Al-Rajhi Bank</h1>
                  <img className='xl:w-4' src={location} alt='' />
                </div>
                <div className='sm:flex sm:justify-start'>
                  <div className='flex items-start justify-end'>
                    <h1 className='addressTextFooter text-right'> +9660532447438<br/>+966551161149</h1>
                    <img className='xl:w-5' src={phone} alt='' />
                  </div>
                  <div className=''>
                    <div className='flex items-center justify-end'>
                      <h1 className='addressTextFooter text-right'> 0096605324447438</h1>
                      <img className='xl:w-5' src={whatsapp} alt='' />
                    </div>
                    <div className='flex items-center justify-end'>
                      <h1 className='addressTextFooter text-right'> ramasko33@gmail.com</h1>
                      <img className='xl:w-5' src={mail} alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
