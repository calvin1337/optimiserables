import React from 'react'
import Button from '../Components/Misc/Button'
import {faFacebookSquare, faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Home() {
  return (
    
    <div className='container flex flex-col items-center justify-center w-3/4 page h-screen'>
      <h1 className='lg:text-8xl'>
        Exciting things are on the horizon...
      </h1>
      <h2 className='lg:text-3xl'>Subscribe to our newsletter or follow us on social media to be the first to know about all our upcoming events for Edinburgh fringe in 2025!</h2>
      <div className='mt-5 w-full flex justify-center'>
        {/* Input container */}
        <form className='flex flex-col w-full sm:w-11/12 lg:flex-row gap-5 h-full'>
          <div className='flex-1'>
            <div className='formField'>
              <input 
                className="w-full p-3 text-lg border-3 border-[#6A3276] rounded-md"
                placeholder='Enter your email'
              />
            </div>
          </div> 
          <div className='flex-2'>
            <div className='formField'>
              <Button />
            </div>
          </div>
        </form>
      </div>
      <div className="fixed bottom-0 left-0 p-4 flex space-x-4 lg:hidden">
      <div className='sm: flex col gap-2'>
        <a href="https://www.instagram.com/optimiserables/" target="_blank" rel="noreferrer" className='socialLink'>
          <FontAwesomeIcon icon={faInstagram} size="2x" color='#ebbc52'/>
        </a>
          <a href="https://x.com/Optimiserables" target="_blank" rel="noreferrer" className='socialLink'>
          <FontAwesomeIcon icon={faFacebookSquare} size="2x" color='#ebbc52'/>
          </a>
          <a href="https://www.tiktok.com/@theoptimiserables?lang=en" rel="noreferrer" target="_blank" className='socialLink'>
          <FontAwesomeIcon icon={faTiktok} size="2x" color='#ebbc52'/>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61557637915188" rel="noreferrer" className='socialLink'>
          <FontAwesomeIcon icon={faXTwitter} size="2x" color='#ebbc52'/>
          </a>
      </div>
      </div>
      {/* <div className="fixed bottom-0 right-0 p-4 flex space-x-4">
        https://www.edfringe.com/take-part/putting-on-a-show/marketing-and-promotion#fringe-logos 
        <div className="lg:w-40 lg:h-20 h-10">
          <img src={enuLogo} alt="Edinburgh Napier Logo" className="w-full h-full object-contain"/>
        </div>
        <div className="lg:w-40 lg:h-20 h-10">
          <img src={fringeLogo} alt="Edinburgh Fringe Logo" className="w-full h-full object-contain bg-transparent"/>
        </div>
      </div> */}
    </div>
  )
}
