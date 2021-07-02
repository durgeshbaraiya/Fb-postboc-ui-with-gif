import React from 'react';
import LeftSidebar from './LeftSidebar';
import NewsFeedScreen from './NewsFeedScreen';
import RightSidebar from './RightSidebar';

const HomeScreen = () => {
  return (
    <div className='w-full h-full grid grid-cols-7'>
      <div className='col-span-2 flex justify-start ml-2'>
        <LeftSidebar />
      </div>
      <div className='col-span-3 h-full'>
        <NewsFeedScreen />
      </div>
      <div className='col-span-2 flex justify-end pr-2'>
        <RightSidebar />
      </div>
    </div>
  );
};

export default HomeScreen;
