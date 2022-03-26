import React from 'react'

import location from '../images/location.png'
import logo3 from '../images/logo3.png'
import spBoxLogo from '../images/sp.png'

const Footer = () => {
  return (
    <div>
      <div className='w-full h-max bg-black text-white'>

        <div className='flex justify-center items-center'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-12'>

            <div className='w-96'>
              <div className='flex justify-start'><img src={logo3} alt='' /></div>
              <div className='flex justify-start'><img src={spBoxLogo} alt='' /></div>
            </div>

            <div className='w-96 flex items-center'>
              <div>
              <div className='flex items-start'>
                <h1 className='text-right'> Jeddah - Al-Hindawiya - Al-Dahab Street,<br></br>opposite Al-Rajhi Bank</h1>
                <img src={location} alt='' />
              </div>
              <div className='sm:flex sm:justify-start block'>
                <div className='flex items-start'>
                  <h1 className='text-right'> +9660532447438<br/>+966551161149</h1>
                  <img src={location} alt='' />
                </div>
                <div className='flex-col items-start'>
                  <div className='flex items-center'>
                    <h1 className='text-right'> 0096605324447438</h1>
                    <img src={location} alt='' />
                  </div>
                  <div className='flex items-center'>
                    <h1 className='text-right'> 0096605324447438</h1>
                    <img src={location} alt='' />
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
