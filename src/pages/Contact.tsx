import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { ICON_LINKS } from "@/components/constants/iconLinks";
import { Reveal } from '@/components/Reveal';


export function Contact(){
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs
          .sendForm('service_sjd1ze7', 'template_uxfakel', e.currentTarget, {
            publicKey: 'VxcZMHQK7imR1W3Ez',
          })
          .then((result) =>{
            console.log(result.text);
            setShowSuccessMessage(true)
          },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.currentTarget.reset()
      };

  return (
    <div className="min-w-screen flex flex-col h-full items-center justify-center relative mx-4 pt-20">
        <div className="flex flex-col items-center absolute top-0 z-20 ">
          <img
          src="/assets/Logo.svg"
          className="w-[300px]"
          />
        </div>
        <Reveal>
          <div className='mt-[200px] w-full h-full pb-10 flex flex-col justify-center items-center'>
            <h1 className=' my-2 p-4 border-t-2 text-3xl md:text-6xl text-black font-playfair'>
            What We Offer
            </h1>
            <p className="md:w-1/2 w-5/6 text-center font-roboto">
            When you call us for a free estimate, we will meet with you to discuss your individual needs and review the details of each room. On every visit, we'll provide dusting, vacuuming, cleaning, and sanitizing services for each room from top to bottom. Our typical service includes everything on this list and mor
            </p>
            <form onSubmit={sendEmail} className='flex flex-col max-w-lg w-5/6 md:w-1/2 mt-4'>
              <input type='text' name='user_name' placeholder='Enter your name' className='p-2 rounded mt-4 border-gray-300 border-2 text-subtext focus:outline-none hover:border-secondary-pink focus:border-secondary-pink transition duration-300' />
              <input type='text' name='user_email' placeholder='Enter your email' className='rounded my-4 p-2 border-gray-300 border-2  text-subtext focus:outline-none  hover:border-secondary-pink focus:border-secondary-pink transition duration-300' />
              <textarea name='message' placeholder='Enter your message' rows={10} className='p-2 bg-transparent border-2 border-gray-300 rounded text-subtext focus:outline-none hover:border-secondary-pink focus:border-secondary-pink transition duration-300'></textarea>
              <button className='text-white bg-gradient-to-b from-gray-300 to-primary-green px-6 py-3 my-8 mx-auto flex items-center rounded hover:scale-110 duration-300'>
              Let's Talk
              </button>
              <ul className='flex flex-col md:flex-row items-start md:gap-0 gap-4 justify-center'>
                {ICON_LINKS.map (({id, child, href, style, text}) => (
                  <li key={id} className={ "flex justify-center items-center whitespace-nowrap gap-2 mx-2 rounded-full font-roboto hover:bg-gray-600 hover:scale-105 transition duration-300 cursor-pointer" + " " + style }>
                    <a className='flex justify-center items-center ' href={href}>
                      <p className='text-primary-green flex justify-center items-center w-10 h-10 bg-white rounded-full'>  {child}</p>
                      <p className="px-2 text-base text-subtext font-semibold whitespace-nowrap">{text}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </form>
          </div>
        </Reveal>
        {showSuccessMessage && (
                        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                            <div className="bg-secondary-pink p-5 w-80 h-40 rounded-xl flex flex-col items-center justify-between shadow-lg">
                                <p className="text-primary-green font-bold">Message successfully sent!</p>
                                <button onClick={() => setShowSuccessMessage(false)} className="mt-4 px-10 py-2 font-semibold bg-primary-green text-white rounded hover:scale-110 transition focus:outline-none">
                                    Thanks!
                                </button>
                            </div>
                        </div>
                    )}
    </div>
  )
}
