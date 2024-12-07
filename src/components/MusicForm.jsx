import React from 'react';
import Footer from './Footer';
import bgVideo from '../assets/bgVideo.mp4';
import Banner from '../assets/Banner.png';

export default function MusicForm() {
    return (
        <div className='relative w-full h-screen'>
            <video className='absolute top-0 left-0 w-full h-full object-cover' autoPlay loop muted>
                <source src={bgVideo} type='video/mp4' />
            </video>
            {/*layer blur*/}
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
    
            <div className='relative z-1 flex flex-col text-white justify-center items-center md:pt-24 bg-green-900'>
                
                <img src={Banner} alt="Inovus Labs IEDC Banner" className='h-12 flex justify-start items-start bg-blue-900' />
                
                <h1 className='text-6xl  bold underline md:text-9xl py-8'> Pattupetti</h1>
                <p className='mt-4 px-12 text-justify text-left '>Pattupeti is a initative by Inovus Labs IEDC, at Kristu Jyothi college to increase the college vibes while at canteen by playing music of their choice by providing the link here</p>
                
                <div className='flex flex-col '>
                    <label className='block mt-8'>Enter the link of the song you want to play </label>
                    <input type="text" name="link" id="link" className="block min-w-0 grow w-64 md:w-96 mt-4 py-2 pr-3 pl-2 rounded text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 " placeholder= "https://youtube.com" />
                    <button className='block px-4 py-1 mt-4 bg-blue-900 rounded text-2xl'>Submit</button>
                </div>           

            </div>
        </div>
    );
}
