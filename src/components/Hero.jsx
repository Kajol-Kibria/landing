import React, { useEffect, useState } from 'react'

export default function Hero() {

  const names = [
    'Success', 'Service', 'Support', 'Experience'
]
const [currentName, setCurrentName] = useState(names[0]);

  function setRandomName() {
    const index = Math.floor(Math.random() * names.length);
    const newName = names[index]
    if (newName == currentName) { setRandomName() }
    else { setCurrentName(newName) }
    return
  }

  useEffect(() => {
    setTimeout(() => {
      setRandomName()
    }, 3500);
  }, [currentName])

  return (
    <div className='herobg sm:h-screen text-white '>
        
    <div className='bg-black/65 sm:h-screen sm:px-20 px-3'>
    <div className='py-6'>
        <div className='flex items-center justify-between'>
          {/* logo */}
          <div className='  gap-3 z-50 flex items-center '>
                <img className=' sm:w-16 w-8' src='/log.png'/>
                <p className=' font-bold text-white  sm:text-3xl text-2xl'>Solve</p>
            </div>
            <button className='sm:px-7 px-4 py-2 sm:text-xl text-xs bg-white text-black font-medium rounded-full'>Get the app</button>
        </div>
    </div>
        <div className='sm:w-[45vw]  sm:space-y-5 space-y-2 mt-28 sm:mt-52 pb-16'>
          <h1 className='2xl:text-7xl sm:text-5xl text-5xl font-bold'>The future of</h1>
          
          <h1 className='2xl:text-7xl sm:text-5xl text-5xl font-bold'>Customer <span className='text-[#FFAD47]'>{currentName}</span></h1>
          <p className='sm:text-lg py-3'>
          Solve is your all-in-one customer support app. Instantly connect with customer support agents from various organizations and get real-time responses to your queries. Choose your preferred communication style and receive all the support you need, effortlessly.
          </p>
          <button className=' sm:px-7 px-4 py-2 sm:text-xl text-xs font-medium bg-[#0E45B6] rounded-full'>Get the app</button>
        </div>

    </div>
    </div>
  )
}
