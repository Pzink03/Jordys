import emailjs from '@emailjs/browser';
import React from 'react';
import { ICON_LINKS } from "@/components/constants/iconLinks";


export function Contact(){
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs
          .sendForm('service_sjd1ze7', 'template_uxfakel', e.currentTarget, {
            publicKey: 'VxcZMHQK7imR1W3Ez',
          })
          .then(
            () => {
              console.log('SUCCESS!');
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
    <div className='mt-[200px] w-full h-full pb-10 flex flex-col justify-center items-center'>
    <h1 className=' my-2 p-4 border-t-2 text-3xl md:text-6xl text-black'>
                            What We Offer
                        </h1>
                        <p className="md:w-1/2 w-5/6 text-center">
                        When you call us for a free estimate, we will meet with you to discuss your individual needs and review the details of each room. On every visit, we'll provide dusting, vacuuming, cleaning, and sanitizing services for each room from top to bottom. Our typical service includes everything on this list and mor
                        </p>
                <form onSubmit={sendEmail} className='flex flex-col max-w-lg w-5/6 md:w-1/2 mt-4'>
                    <input type='text' name='user_name' placeholder='Enter your name' className='p-2 rounded mt-4 bg-transparent border-gray-300 border-2 text-subtext focus:outline-none hover:border-secondary-pink focus:border-secondary-pink transition duration-300' />
                    <input type='text' name='user_email' placeholder='Enter your email' className='rounded my-4 p-2 bg-transparent border-gray-300 border-2  text-white focus:outline-none  hover:border-secondary-pink focus:border-secondary-pink transition duration-300' />
                    <textarea name='message' placeholder='Enter your message' rows={10} className='p-2 bg-transparent border-2 border-gray-300 rounded text-white focus:outline-none hover:border-secondary-pink focus:border-secondary-pink transition duration-300'></textarea>
                    <button className='text-white bg-gradient-to-b from-gray-300 to-primary-green px-6 py-3 my-8 mx-auto flex items-center rounded hover:scale-110 duration-300'>
                        Let's Talk
                    </button>
                    <ul className='flex flex-col md:flex-row items-start md:gap-0 gap-4 justify-center'>
                        {ICON_LINKS.map (({id, child, href, style, text}) => (
                            // eslint-disable-next-line
                        <li key={id} className={ "flex justify-center items-center whitespace-nowrap gap-2 mx-2 rounded-full  hover:bg-gray-600 hover:scale-105 transition duration-300 cursor-pointer" + " " + style }>
                            <a className='flex justify-center items-center w-10 h-10 rounded-full bg-secondary-pink text-primary-green' href={href} target='_blank' rel="noreferrer">  {child}</a>
                            <p className=" text-base text-subtext font-semibold">{text}</p>
                        </li>
                        ))}
                    </ul>
                </form>

        </div>
    </div>
  )
}
