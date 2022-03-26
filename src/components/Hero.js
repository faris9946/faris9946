import React from 'react'
import '../styles/Hero.css'

import bgHero from '../images/bg.png'
import Slider1 from '../images/slider1.png'
import product1 from '../images/img1.png'
import { Link } from 'gatsby'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';


const Hero = () => {
    
  return (
    
    <div>
        <div className='bgHero w-full h-screen flex justify-center items-center'>
            <img src={bgHero} alt="bg" />
        
            <div  className='absolute'>
            
            
                    <img src={Slider1} />
                
            </div>
        </div>

        <h1 className='itemNameTitleHero text-center'>GT-1526 Continuous Belt<br/>Laminator Model</h1>
        
        <div className='flex justify-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                
                <Link to='/ProductDetail/'><div className='productRectangleHero bg-white shadow-lg rounded-2xl'>
                    <div className='flex justify-center'><img className='productImageHero' src={product1} alt='pro' /></div>
                    <div className='flex justify-center'><h1 className = "productNameHero text-center pt-3">Semi-automatic 2-in-1 thermal laminating and cutting machine</h1></div>
                </div></Link>
                <Link to='/ProductDetail/'><div className='productRectangleHero bg-white shadow-lg rounded-2xl'>
                    <div className='flex justify-center'><img className='productImageHero' src={product1} alt='pro' /></div>
                    <div className='flex justify-center'><h1 className = "productNameHero text-center pt-3">Semi-automatic 2-in-1 thermal laminating and cutting machine</h1></div>
                </div></Link>
                <Link to='/ProductDetail/'><div className='productRectangleHero bg-white shadow-lg rounded-2xl'>
                    <div className='flex justify-center'><img className='productImageHero' src={product1} alt='pro' /></div>
                    <div className='flex justify-center'><h1 className = "productNameHero text-center pt-3">Semi-automatic 2-in-1 thermal laminating and cutting machine</h1></div>
                </div></Link>
                <Link to='/ProductDetail/'><div className='productRectangleHero bg-white shadow-lg rounded-2xl'>
                    <div className='flex justify-center'><img className='productImageHero' src={product1} alt='pro' /></div>
                    <div className='flex justify-center'><h1 className = "productNameHero text-center pt-3">Semi-automatic 2-in-1 thermal laminating and cutting machine</h1></div>
                </div></Link>
                <Link to='/ProductDetail/'><div className='productRectangleHero bg-white shadow-lg rounded-2xl'>
                    <div className='flex justify-center'><img className='productImageHero' src={product1} alt='pro' /></div>
                    <div className='flex justify-center'><h1 className = "productNameHero text-center pt-3">Semi-automatic 2-in-1 thermal laminating and cutting machine</h1></div>
                </div></Link>
                <Link to='/ProductDetail/'><div className='productRectangleHero bg-white shadow-lg rounded-2xl'>
                    <div className='flex justify-center'><img className='productImageHero' src={product1} alt='pro' /></div>
                    <div className='flex justify-center'><h1 className = "productNameHero text-center pt-3">Semi-automatic 2-in-1 thermal laminating and cutting machine</h1></div>
                </div></Link>
                <Link to='/ProductDetail/'><div className='productRectangleHero bg-white shadow-lg rounded-2xl'>
                    <div className='flex justify-center'><img className='productImageHero' src={product1} alt='pro' /></div>
                    <div className='flex justify-center'><h1 className = "productNameHero text-center pt-3">Semi-automatic 2-in-1 thermal laminating and cutting machine</h1></div>
                </div></Link>
                <Link to='/ProductDetail/'><div className='productRectangleHero bg-white shadow-lg rounded-2xl'>
                    <div className='flex justify-center'><img className='productImageHero' src={product1} alt='pro' /></div>
                    <div className='flex justify-center'><h1 className = "productNameHero text-center pt-3">Semi-automatic 2-in-1 thermal laminating and cutting machine</h1></div>
                </div></Link>
                
            </div>
        </div>

        <div className='flex justify-center py-16'>
            <Link to="/Products/" className= "first-letter: text-sm lg:text-base font-bold text-white py-2 px-8 text-center bg-primary hover:font-bold rounded-xl  underline-offset-2 decoration-2">
              VIEW ALL
            </Link>
        </div>

        <div className='flex justify-center'>
            <h1>We are Ramasco Corporation for Packaging Technology Systems . Specialized in importing and selling 
                industrial machines, packaging, PVC nylon bags  ,  PUF  packaging bags, and  OPP perfume packaging bags .
                  We also customize bags according to sizes and according to demand. and plastic cans). We have thermal
                   cutting machines of all sizes, filling machines for liquids, perfumes, creams and sticky materials. 
                   We have spare parts and maintenance .</h1>
        </div>

        
    </div>
  )
}

export default Hero
