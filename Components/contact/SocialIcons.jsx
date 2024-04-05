import React from 'react'
import {BsFacebook, BsInstagram} from 'react-icons/bs'

import {FaLinkedin} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si'

    const SocialIcons = () => {
        return (
          <div className='flex justify-center items-center gap-2'>


             <a href='https://www.facebook.com/profile.php?id=100006991656718' target='_blank' className='text-3xl hover:opacity-70' >
              <BsFacebook/>
              
              </a> 
              <a href='https://www.instagram.com/lrbybrhymmwsy?igsh=MTl6ODI0eWxyZmxvYQ=='
              target='_blank' className='text-3xl hover:opacity-70' >
              <BsInstagram/>
              </a> 
               
          
             <a target='_blank' href='mailto:alrabie464@gmail.com' className='text-3xl hover:opacity-70'>
              <SiGmail/>
              </a>
          </div>
        )
      }

export default SocialIcons