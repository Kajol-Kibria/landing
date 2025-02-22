import React from 'react'

export default function Download() {
  return (
    <div className='bg-[#000E28] sm:py-24 py-10 sm:px-20 px-3 text-center'>
      <h1 className='sm:text-4xl text-2xl font-semibold sm:my-8 my-3 text-white'>Download our apps</h1>
      <p className='sm:text-xl text-lg font-medium text-white'>Our user app and agent app are available in Android and iOS</p>

      <div className='bg-white rounded-xl sm:px-20 2xl:px-24 p-5 sm:p-0  my-8 flex items-center justify-between 2xl:mx-20 mx-5'>
        <div className=''>
          <p className='sm:text-4xl sm:w-1/2 text-left sm:mb-8 mb-4 font-semibold'>Reach agents in seconds, resolve queries in minutes.</p>
          <div className='flex items-center sm:justify-start justify-center gap-5'>
            <div className=' text-left bg-[#BDC2F6]/35 rounded-2xl w-32 py-3 sm:py-4 sm:w-48 inline-block b'>
            <div className='flex items-center justify-center gap-3'>
              <div className='w-6 sm:w-auto'>
              <img src="../../play.png" alt="" />
              </div>
              <div>
                <p className='sm:text-xs text-[8px]'>Get it on</p>
                <p className='font-semibold text-[10px] sm:text-base'>Google Play</p>
              </div>
            </div>
            </div>
            <div className=' text-left bg-[#BDC2F6]/35 rounded-2xl w-32 sm:w-48 py-3 sm:py-4 inline-block b'>
            <div className='flex items-center justify-center gap-3'>
              <div className='w-6 sm:w-auto'>
              <img src="../../ios.png" alt="" />
              </div>
              <div>
                <p className='sm:text-xs text-[8px]'>Get it on</p>
                <p className='font-semibold text-[10px] sm:text-base'>App Store</p>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className=' sm:block hidden'>
          <img width={500} src="../../phone.png" alt="" />
        </div>
      </div>
            
    </div>
  )
}
