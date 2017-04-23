// Component for each video from the list item

import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // get the video that we passed to VideoList as a property
  // es6 syntax: instead of pass 'props' argument and then const video = props.video;
  // just pass '{video}'

  // !! Put '{}' inside the JSX when referencing a javascript variable

  const imageUrl = video.snippet.thumbnails.default.url;

  // Whenever a user clicks on the 'li', the event fires, onClick
  // and we call 'onVideoSelect', and we pass 'video' - the particular videos list item

  return (

    <li onClick={() => onVideoSelect(video)} className="list-group-item">

        <div className="video-list media">

            <div className="media-left">

              <img className="media-object" src={imageUrl} />

            </div>

            <div className="media-body">

              <div className="media-heading">{video.snippet.title}</div>

            </div>

        </div>

    </li>

  )

};

export default VideoListItem;
