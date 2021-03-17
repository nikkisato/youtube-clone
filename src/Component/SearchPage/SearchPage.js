import React from 'react';
import TuneOutlinedIcon from '@material-ui/icons/Tune';
import './SearchPage.css';
import ChannelRow from '../ChannelRow/ChannelRow';
import VideoRow from '../VideoRow/VideoRow';

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image='https://pbs.twimg.com/profile_images/1328417902978973696/lMee7Kdz_400x400.jpg'
        channel='Nikki Sato'
        verified
        subs='2K'
        noOfVideos={20}
        description='Programmer and Designer'
      />
      <hr />
      <VideoRow
        views='1.4M'
        subs='12K'
        description='React, Context API, Material UI, BEM styling and so much more!'
        timestamp='59 second ago'
        channel='Nikki Sato'
        title='Youtube Clone made with Love'
        image='https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png'
      />
      <VideoRow
        views='3.1M'
        subs='1.23M'
        description='Interact with the Spotify Clone!'
        timestamp='2 years ago'
        channel='Nikki Sato'
        title='Spotify Clone'
        image='https://digital.hbs.edu/platform-digit/wp-content/uploads/sites/2/2020/04/spotify-logo-1920x1080-2.jpg'
      />
      <VideoRow
        views='2.4M'
        subs='1.23M'
        description='Amazon Clone Tutorial - Learn to build fast web apps with React (React js) from scratch. 🔥Get the complete React course: ...'
        timestamp='2 years ago'
        channel='Clever Programmer'
        title='React Tutorial for Beginners [React js]'
        image='https://miro.medium.com/max/2560/1*J6jEqNvW0wWAblO1FPVtTQ.jpeg'
      />
      <VideoRow
        views='3.1M'
        subs='1.23M'
        description='Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour. 🔥Get my Complete JavaScript Course with a...'
        timestamp='2 years ago'
        channel='Programming with Mosh'
        title='JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour [2020]'
        image='https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCE3fbsB0deZPlgm79U9HlO8DG-0A'
      />
      <VideoRow
        views='2.4M'
        subs='1.23M'
        description='React Tutorial - Learn to build fast web apps with React (React js) from scratch. 🔥Get the complete React course: ...'
        timestamp='2 years ago'
        channel='Programming with Mosh'
        title='React Tutorial for Beginners [React js]'
        image='https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBIQ5WzXVRH8bb9tiV5khu2jAe4HA'
      />
      <VideoRow
        views='2M'
        subs='2.37M'
        description='Learn the basics of HTML5 and web development in this awesome course for beginners. ⭐️ Contents ⭐️ ⌨️ (0:00:00) ...'
        timestamp='1 years ago'
        channel='freeCodeCamp.org'
        title='HTML Full Course - Build a Website Tutorial'
        image='https://i.ytimg.com/vi/pQN-pnXPaVg/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDSHd4tgm81VMHWtFRnQJDAe-K3Bg'
      />
    </div>
  );
}

export default SearchPage;
