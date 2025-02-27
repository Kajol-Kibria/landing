import React from 'react'

export default function MakingCustomersHappy() {
  return (
    <div className='bg-[#BDC2F6]/15'>

    <div className='sm:py-24 py-10 sm:px-20 px-3'>
        <div className='text-center'>
        <p className='sm:text-4xl text-2xl font-semibold sm:my-8 my-3'>Making customers happy...</p>
        <p className='sm:text-xl text-lg font-medium'>In 3 simple steps</p>

        <div className='sm:flex justify-around 2xl:mx-24 my-12'>
            <div className='flex flex-col items-center justify-center my-5'>
                <img width={250} src='../happy.png'/>
                <div className=' w-96 mt-6'>
                <p className='text-lg font-medium mb-2'>Select a company</p>
                <p>Browse and choose from a wide range of companies across various industries.</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center my-5'>
                <img width={250} src='../happy1.png'/>
                <div className=' w-96 mt-6'>
                <p className='text-lg font-medium mb-2'>Submit your query</p>
                <p>Ask a question, lodge a complaint, or request support effortlessly.</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center my-5'>
                <img width={250} src='../happy2.png'/>
                <div className=' w-96 mt-6'>
                <p className='text-lg font-medium mb-2'>Get instant assistance</p>
                <p>Connect with a real human agent in seconds and resolve your query within minutes</p>
                </div>
            </div>
            
        </div>

        <button className='mt-12 sm:px-7 px-4 py-2 sm:text-xl text-xs font-medium bg-[#0E45B6] text-white rounded-full'>Get the app</button>
        </div>
        
    </div>
    </div>
  )
}
