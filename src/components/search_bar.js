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

// Functional components are used when we need to take in some information and return some JSX

// A functional component can contain a class based component!

// Class based component are used whenever we have a component that needs to be aware of the state, like:
// data is changing overtime, user events

// STATE: plain javascript object,
// that is used to record and react to user events

// Each class based component has its own state object
// Whenever the component's state is changed, the component immediately rerenders
// And forses all of its children to rerender as well
// Functional components do not have state!

// The following component is class component
// meaning: define class SearchBar and give it access to
// all functionality that React.component has
class SearchBar extends Component {

    // Initialize the state by defining a constructor method
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

      // !! IMPORTANT
      // this is the ONLY PLACE IN OUR APP where we will define the state value in this way, with '=' operator
      // when we will UPDATE the state, we will use 'setState' method !
    }

  // every class based React component that we create,
  // must have a defined 'render' metod

  render() {
    // in our render method, we must return some JSX, otherwise will throw an error
    // all html input elements have a 'change' event
    // ALWAYS manipulate the state with 'setState' object !
    return (
      <div className="search-bar">
       <input
       value = { this.state.term }
       onChange = { event => this.onInputChange( event.target.value ) } />
      </div>
    );

    // Controlled field: has its value set by the state! - Our input is controlled input!

    // THE REAL LOGIC: when users types somenthing, they don't change the input value, they just trigger an event,
    // which updates the state, causes the component to rerender

    // es6 feature: arrow function
    // we replace our one line handler with arrow function; write less, cleaner code

    // Inside of JSX: when we reference javascript variable, we use '{}' !!

  }

  onInputChange(term) {

      this.setState({term});
      this.props.onSearchTermChange(term);

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


  // WHAT HAPPENS WHEN WE UPDATE THE INPUT ELEMENT:
  // 1. The event handler runs
  // 2. We set the state with the new value of the input
  // 3. Whenever we update the state, it causes our component to automatically rerender
  //    and push all the updated information from the render method ino the DOM

}

//make out SearchBar available for other files to access it
export default SearchBar;
