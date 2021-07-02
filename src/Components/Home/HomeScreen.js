import React from 'react';
import NewsFeedScreen from './NewsFeedScreen';


const HomeScreen = () => {
  return (
    <div className='w-full h-full grid grid-cols-7'>
      
      <div className='col-span-3 h-full'>
        <NewsFeedScreen />
      </div>
     
    </div>
  );
};

export default HomeScreen;
