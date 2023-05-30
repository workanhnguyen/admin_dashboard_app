import React from 'react';

import { Header, FinancialChart } from '../../components';

const Financial = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Chart' title='Financial' />
      <div className='w-full flex justify-center text-2xl my-4'>
        <p>AAPLE Historical</p>
      </div>
      <div className='w-full'>
        <FinancialChart />
      </div>
    </div>
  )
}

export default Financial