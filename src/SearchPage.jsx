import { TuneOutlined } from '@material-ui/icons';
import React from 'react';
import ChannelRow from './ChannelRow';
import './SearchPage.css';
import VideoRow from './VideoRow';

const SearchPage = () => {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TuneOutlined />
        <h2>Filter</h2>
      </div>
      <hr />

      <ChannelRow
        image='https://i.insider.com/5af59dd07708e905f8336883?width=600&format=jpeg&auto=webp'
        channel='Jocko Podcast'
        verified
        subs='1.08M'
        noOfVideos={111}
        description='Jocko Willink and Echo Charles discuss discipline and leadership... extensively.'
      />

      <hr />

      <VideoRow
        views='500k'
        subs='1.08M'
        description='Get Into Shape and Get After It'
        timestamp='6 months ago'
        channel='Jocko Podcast'
        title='Get Into Shape'
        image='https://i.ytimg.com/vi/a8_gxXEwd4Q/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDkbRFyruoW8Wl5a9tjYylEcV_J3g'
      />
    </div>
  );
};

export default SearchPage;
