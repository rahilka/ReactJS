// React is a Javascript library
// that is used to produce HTML
// that is showed to the user in the browser

// When we write React code, we write individual components or views

// Component: collection of javascript functions that produce HTML

// When we write React code, we write multiple different COMPONENTS
// and we nest these components
// by place one inside the other
// and make complex apps relatively simple

/******************/
/******************/

// get React from our installed modules
// and give me access to it in this file

import React from 'react';
//meaning: go and find the library 'react' in my modules
// and assign it to the variable React
// React is used to create and manage our components

import ReactDOM from 'react-dom';
// to render a component to the DOM, we don't use the react core library
// we use ReactDOM
// ReactDOM is used to interact with the actual DOM

// Create a new component that should produce some HTML

// render = place this component's html on the page

// When we create a component,
// we create a class, a type of a component

// es6 feature: declaring a function

const App = () => {

  return <div>HI!</div>; // this html-like is JSX
  // JSX = subset of JS that allows us to write,
  // what looks like html in our js files
  // but is really, under the hood, javascript

  // webpack and babel are going transpile our code
  // before run into the browser

  // THE PURPOSE OF JSX
  // is to make our components a lot more clear
  // and easier to see what's going on

}

// App is class, not an instance!
// So before we try to render the component to the DOM,
// we need to create an instance from the class

// es6 feature: const
// declaring a variable with const means that
// this is the final value that this varaible is going to have
// it is constant!


// Take this component's generated HTML and
// put in on the page (in the DOM)

// ReactDOM.render(App); //this is wrong cos in this way we pass the class 'App'
// and we need to pass the App instance,
// which we do with wrapping the class name into JSX tags

ReactDOM.render(<App />, document.querySelector('.container'));
// the second argument is reference to an existing DOM node on the page
// meaning : find the element on the page with class of 'container', and then
// try to render the App component into that div
