import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Updates() {
  const updatesarray = [
    {
      id: 1,
      img:'../../newsimage.png',
      title:'Solve is everywhere now',
      time:'3 min read',
      date:'12/10/2025',
    },
    {
      id: 2,
      img:'../../newsimage.png',
      title:'Solve is everywhere now',
      time:'3 min read',
      date:'12/10/2025',
    },
    {
      id: 3,
      img:'../../newsimage.png',
      title:'Solve is everywhere now',
      time:'3 min read',
      date:'12/10/2025',
    },
    {
      id: 4,
      img:'../../newsimage.png',
      title:'Solve is everywhere now',
      time:'3 min read',
      date:'12/10/2025',
    },
    {
      id: 5,
      img:'../../phone.png',
      title:'Solve is everywhere now',
      time:'3 min read',
      date:'12/10/2025',
    },
    {
      id: 6,
      img:'../../newsimage.png',
      title:'Solve is everywhere now',
      time:'3 min read',
      date:'12/10/2025',
    },
    {
      id: 7,
      img:'../../newsimage.png',
      title:'Solve is everywhere now',
      time:'3 min read',
      date:'12/10/2025',
    },
  ]
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };
  return (
    <div className='sm:py-24 py-10 sm:pl-16 2xl:pl-36 pl-7 pr-7 sm:pr-0'>
      <p className='text-3xl font-semibold py-8'>Latest Updates</p>
      
     <Carousel
  swipeable={true}
  infinite={true}
  arrows={false}
  draggable={true}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  
  autoPlay={true}
  autoPlaySpeed={3400}
  keyBoardControl={true}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  
>
  
    {updatesarray.map((data)=>{
      return(
        <div key={data.id} className='space-y-4 sm:mr-5'>
          <div className='object-cover '>
          <img   className='sm:w-[360px] w-full 2xl:h-[220px] h-[160px] rounded-lg object-cover' src={data.img} alt="" />
          </div>
          <p className='text-xl font-semibold'>{data.title}</p>
          <div className='text-black/55 flex items-center gap-3 text-xs'>
            <p>3 min read</p>
            <div className='bg-black/55 w-2 h-2 rounded-full'></div>
            <p>12/10/2025</p>
          </div>
        </div>
      )
    })}
  
</Carousel>
    
    </div>
  )
}
