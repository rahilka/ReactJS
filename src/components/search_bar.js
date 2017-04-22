// The purpose of this component is to make sure that
// we have an input at the top that the user can type in.
// When type into the input, it should update the video list on the right side
// So when the user types something in the input,
// we need to make an api request to the YouTube API

import React from 'react';
// We need to make sure that we include React in all of our components where we use JSX
// because, when transpiling JSX to javascript, 'return <input />' turns into a call, like:
// React.createElement. So it will throw an error if React is not in the scope of the file

const SearchBar = () => {

  return <input />;

};  // this will generate an html input element

//make out SearchBar available for other files to access it
export default SearchBar;
