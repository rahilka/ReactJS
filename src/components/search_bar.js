// The purpose of this component is to make sure that
// we have an input at the top that the user can type in.
// When type into the input, it should update the video list on the right side
// So when the user types something in the input,
// we need to make an api request to the YouTube API

// import React and get the property Component as a variable named Component
import React, { Component } from 'react';
// We need to make sure that we include React in all of our components where we use JSX
// because, when transpiling JSX to javascript, 'return <input />' turns into a call, like:
// React.createElement. So it will throw an error if React is not in the scope of the file

// const SearchBar = () => {
//
//   return <input />;
//
// }; // This is a functional react component, because, it literally is a function

// The following component is class component
// meaning: define class SearchBar and give it access to
// all functionality that React.component has
class SearchBar extends Component {
  // every class based React component that we create,
  // must have a defined 'render' metod

  render() {
    // in our render method, we must return some JSX, otherwise will throw an error
    return <input />;

  }

}


//make out SearchBar available for other files to access it
export default SearchBar;
