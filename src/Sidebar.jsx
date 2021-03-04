import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import {
  ExpandMoreOutlined,
  History,
  OndemandVideo,
  ThumbUpAltOutlined,
  VideoLibrary,
  WatchLater,
} from '@material-ui/icons';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SidebarRow selected title='Home' Icon={HomeIcon} />
      <SidebarRow title='Trending' Icon={WhatshotIcon} />
      <SidebarRow title='Subscription' Icon={SubscriptionsIcon} />
      <hr />
      <SidebarRow title='Library' Icon={VideoLibrary} />
      <SidebarRow title='History' Icon={History} />
      <SidebarRow title='Your Videos' Icon={OndemandVideo} />
      <SidebarRow title='Watch Later' Icon={WatchLater} />
      <SidebarRow title='Liked Videos' Icon={ThumbUpAltOutlined} />
      <SidebarRow title='Show More' Icon={ExpandMoreOutlined} />
    </div>
  );
};

export default Sidebar;
