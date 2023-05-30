import React from 'react';

import { Header, AreaChart } from '../../components';

const Area = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Chart' title='Area' />
      <div className='w-full flex justify-center text-2xl my-4'>
        <p>Inflation Rate in Percentage</p>
      </div>
      <div className='w-full'>
        <AreaChart />
      </div>
    </div>
  )
}

export default Area