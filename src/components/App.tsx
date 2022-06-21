import React from 'react';
import { SongsList } from './songList';

export const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className='column eight wide'>
          <SongsList />
        </div>
      </div>
    </div>
  );
};
