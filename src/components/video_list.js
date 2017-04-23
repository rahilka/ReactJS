// Component that will show the videos that the user searched for on the right side of the page

// This component doesn't need state, it doesn't record any user reactions,
// it doesn't rerender itself, so we can make it functional component

import React from 'react';

// when using a functional component, the 'props' object will come as an argument to the function
// in class somponent, the props are available anywhere, in any method we define, with: 'this.props'
const VideoList = (props) => {
  // like : const videos = props.videos
  return (

    <ul className="col-md-4 list-group" >

      {props.videos.length}

    </ul>

  );

};

export default VideoList;
