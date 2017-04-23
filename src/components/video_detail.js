// Before creating a component, decide:
// Do I expect the component to need to maintain any type of state ???

// The video deatil component only really need to care about:
// the video title, description and the url
// And all of these properties are avilable through 'props', as are gonna be passed doen from the App component

// So, we don't really need any state on the video detail component, that is why will make functional component

import React from 'react';

const VideoDetail = ({video}) => {

  // We need to check if the 'video' is provided in the 'props'
  // before it attempts to render:

  if(!video) {
    return <div>Loading...</div>
  }

  // When embedding/navigating to youtube video,
  // the only thing that changes is the ID of the video

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`; //es6 feature: template strings

  return (

    <div className = "video-detail col-md-8">

        <div className = "embed-responsive embed-responsive-16by9">

          <iframe className="embed-responsive-item" src={url}></iframe>

        </div>

        <div className = "details">

          <div>{video.snippet.tittle}</div>
          <div>{video.snippet.description}</div>

        </div>

    </div>

  )

};

export default VideoDetail;
