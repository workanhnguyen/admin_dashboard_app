import React from 'react';

import { Header, ColorMappingChart } from '../../components';

const ColorMapping = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Chart' title='Color Mapping' />
      <div className='w-full flex justify-center text-2xl my-4'>
        <p>USA CLIMATE - WEATHER BY MONTH</p>
      </div>
      <div className='w-full'>
        <ColorMappingChart />
      </div>
    </div>
  )
}

export default ColorMapping