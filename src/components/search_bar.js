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

// Class component have some additional functionality over functional component

// The following component is class component
// meaning: define class SearchBar and give it access to
// all functionality that React.component has
class SearchBar extends Component {

    constructor(props) {
      // The 'constructor' function that all js classes have,
      // is the first and only function called automatically,
      // whenever a new instance of the class is created.
      // And is reserved for initializing variables, state etc. for our class

      super(props);
      // with 'super' we call the parent method defined on the parent class

      //Initialize state:
      this.state = { term: '' };
      // whenever the user updates the search input, 'term' is the property that will record the change on
      // so we will update this.state.term to be the value of the input

    }

  // every class based React component that we create,
  // must have a defined 'render' metod

  render() {
    // in our render method, we must return some JSX, otherwise will throw an error
    // all html input elements have a 'change' event
    // return <input onChange = {(this.onInputChange)} />;
    return <input onChange = { event => console.log(event.target.value) } />;
    // es6 feature: arrow function
    // we replace our one line handler with arrow function; write less, cleaner code

  }

  // Handling events in React has two steps:
  // 1. Declare an event handler (function that will run whenever the event occur)
  // 2. Pass the event handler to the element that we want to monitor for events
  // In our case, we want to know whenever our input element in the search bar has its text changed

  // onInputChange(event) {
  //   // 'event' object contains information about the occured event
  //   console.log(event.target.value);
  //
  // }

}

//make out SearchBar available for other files to access it
export default SearchBar;
