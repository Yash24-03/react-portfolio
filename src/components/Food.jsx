import React, { useState } from 'react';
import { data } from '../data/data.js';


const Food = () => {
  //   console.log(data);
  const [foods, setFoods] = useState(data);

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };


  // Youtube Thumbnail
  
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Resources
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setFoods(data)}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              All
            </button>
            <button
              onClick={() => filterType('meditation')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Meditation
            </button>
            <button
              onClick={() => filterType('exercise')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Exercise
            </button>
            <button
              onClick={() => filterType('wellness')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Wellness
            </button>
            <button
              onClick={() => filterType('chicken')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              IDK
            </button>
          </div>
        </div>


      </div>

      {/* Display foods */}
      {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
      {foods.map((item, index) => (
    <a
      key={index}
      href={item.link}
      target='_blank' // optional: opens the link in a new tab
      rel='noopener noreferrer' // recommended for security
      className='relative border shadow-lg rounded-lg hover:scale-105 duration-300'
    >
      <img
        src={item.image}
        alt={item.name}
        className='w-full h-[200px] object-cover rounded-t-lg'
      />
      <div className='absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 text-white rounded-t-lg opacity-0 hover:opacity-100 transition-opacity'>
        <div className='p-4'>
          <h3 className='text-lg font-bold mb-2'>Description</h3>
          <p className='text-sm'>{item.description}</p>
        </div>
      </div>
      <div className='flex justify-between px-2 py-4'>
        <p className='font-bold'>{item.name}</p>
      </div>
    </a>
  ))}
</div>


    </div>
  );
};

export default Food;
