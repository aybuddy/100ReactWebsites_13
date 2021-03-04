import React from 'react';
import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='app__page'>
        <Sidebar />
        <RecommendedVideos />
        {/* main video section */}
      </div>
    </div>
  );
}

export default App;
