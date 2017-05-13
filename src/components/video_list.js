// Component that will show the videos that the user searched for on the right side of the page

// This component doesn't need state, it doesn't record any user intereactions,
// it doesn't rerender itself, so we can make it functional component

import React from 'react';
import VideoListItem from './video_list_item';

// when using a functional component, the 'props' object will come as an argument to the function
// in class somponent, the props are available anywhere, in any method we define, with: 'this.props'
const VideoList = (props) => {
  // like : const videos = props.videos
  // to iterate over the videos array will use 'map'

  // React has a bunch of logic built into it to optimize the process of rendering a list
  // Provide a key for each element in our list - unique value for each video

  // In our main App component, we pass onVideoSelect property to the VideoList tag in the JSX
  // That means that VideoList now has a property on 'props' called props.onVideoSelect

  // By putting 'onVideoSelect' property on VideoListItem, makes exist on the 'props' on the VideoListItem component

  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect = {props.onVideoSelect}
        key = {video.etag}
        video = {video} />
    )
  });

  return (

    <ul className="col-md-4 list-group" >

      {videoItems}

    </ul>

  );

};

export default VideoList;
