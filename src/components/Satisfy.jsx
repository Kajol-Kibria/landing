import React from 'react'

export default function Satisfy() {
  return (
    <div className=' sm:py-24 py-10 2xl:px-40 sm:px-16 px-3'>
      <p className='text-center sm:text-4xl text-2xl font-semibold sm:my-8 my-3'>Satisfy your customers with Solve</p>

      <div className='sm:flex items-start justify-between'>
        <div className='sm:w-[60%] 2xl:w-[40%]'>
          <p className='py-5 font-medium sm:text-xl text-center sm:text-left'>Set Up, Scale, and Succeed</p>
          <div className='mx-4 sm:mx-0'>
            
                <div className=' flex items-start sm:gap-7 gap-3 my-5'>
                  <img width={25} src="../../no1.png" alt="" />
                  <div>
                  <p className='font-medium sm:text-xl text-base mb-3'>Create your business account</p>
                  <p className='mr-0 sm:mr-64 2xl:mr-20 text-sm sm:text-lg'>Set up your buisness account on solve within minutes and enter the world of possibilities. Dont worry, it&apos;s free.</p>
                  </div>
                </div>
                <div className='flex items-start sm:gap-7 gap-3 my-5'>
                <img width={25} src="../../no2.png" alt="" />
                  <div>
                  <p className='font-medium sm:text-xl text-base mb-3'>Add your customer service agents</p>
                  <p className='mr-0 sm:mr-64 2xl:mr-20 text-sm sm:text-lg'>Set up your buisness account on solve within minutes and enter the world of possibilities. Dont worry, it&apos;s free.</p>
                  </div>
                </div>
                <div className='flex items-start sm:gap-7 gap-3 my-5'>
                <img width={25} src="../../no3.png" alt="" />
                  <div>
                  <p className='font-medium sm:text-xl text-base mb-3'>Your agents get paid each week</p>
                  <p className='mr-0 sm:mr-64 2xl:mr-20 text-sm sm:text-lg'>Set up your buisness account on solve within minutes and enter the world of possibilities. Dont worry, it&apos;s free.</p>
                  </div>
                </div>
            
        </div>
        </div>
        <div className='sm:w-[50%] mx-5 sm:mx-0'>
          <p className='text-xl font-medium py-5'>Get Started</p>
          <form >
            <div className=' grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6'>

            <div>
            <label className='grid font-medium text-base sm:text-lg my-2' htmlFor="">First name</label>
            <input className='w-full h-9 sm:h-12 px-4 border border-[#BDC2F6] outline-none rounded-md bg-[#BDC2F6]/20' type="text" />
            </div>
            <div>
            <label className='grid font-medium text-base sm:text-lg my-2 ' htmlFor="">Last name</label>
            <input className='w-full h-9 sm:h-12 px-4 border border-[#BDC2F6] outline-none rounded-md bg-[#BDC2F6]/20' type="text" />
            </div>
            <div>
            <label className='grid font-medium text-base sm:text-lg my-2 ' htmlFor="">Business email</label>
            <input className='w-full h-9 sm:h-12 px-4 border border-[#BDC2F6] outline-none rounded-md bg-[#BDC2F6]/20' type="email" />
            </div>
            <div>
            <label className='grid font-medium text-base sm:text-lg my-2 ' htmlFor="">Company name</label>
            <input className='w-full h-9 sm:h-12 px-4 border border-[#BDC2F6] outline-none rounded-md bg-[#BDC2F6]/20' type="text" />
            </div>
            <div>
            <label className='grid font-medium text-base sm:text-lg my-2 ' htmlFor="">Query volume per month</label>
            <select className='w-full h-9 sm:h-12 px-4 border border-[#BDC2F6] outline-none rounded-md bg-[#BDC2F6]/20'>
              <option value="">Please select</option>
              <option value="">up to 500</option>t
              <option value="">up to 700</option>t
            </select>
            </div>
            <div>
            <label className='grid font-medium text-base sm:text-lg my-2 ' htmlFor="">Valid phone number</label>
            <input className='w-full h-9 sm:h-12 px-4 border border-[#BDC2F6] outline-none rounded-md bg-[#BDC2F6]/20' type="text" />
            </div>
            <div>
            <label className='grid font-medium text-base sm:text-lg my-2 ' htmlFor="">Additional request</label>
            <input className='w-full h-9 sm:h-12 px-4 border border-[#BDC2F6] outline-none rounded-md bg-[#BDC2F6]/20' type="text" />
            </div>
            <div>
            <label className='grid font-medium text-base sm:text-lg my-2 ' htmlFor="">Where did you hear about us?</label>
            <select  className=' w-full h-9 sm:h-12 px-4 border border-[#BDC2F6] outline-none rounded-md bg-[#BDC2F6]/20'>
              <option  value="">Please select</option>
              <option value="">From my friend</option>t
              <option value="">From internet</option>t
              <option value="">From youtube</option>t
            </select>
            </div>
            </div>
            
            
            <div className=' mt-8'>
              <div>
              <input type="checkbox" className='mr-3 cursor-pointer'/>
              <label>I agree to receive email from Solve</label>
              </div>
            <button className='bg-[#0E45B7] text-white px-8 py-2 font-medium rounded-full my-8'>Submit</button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  )
}
