import React from "react";

const PDF = () => {
  return (
    <div>
      <div>
      <h3 className="collapse-title text-2xl font-medium">
        Differences between uncontrolled and controlled components
      </h3>
        <p className="text-xl">
          Uncontrolled components are form inputs that are handled by the DOM.
          In other words, their values are not controlled by React, but by the
          browser. The value of an uncontrolled component is set by the user
          input directly on the DOM, and to retrieve the value, you need to
          query the DOM using JavaScript. Uncontrolled components are easier to
          set up and manage, but they can lead to unpredictable behavior because
          the state of the component is not managed by React.
          <br /> <br />
          Controlled components, on the other hand, are form inputs that are
          fully controlled by React. The value of a controlled component is set
          and managed by React, rather than the browser. When the user interacts
          with a controlled component, React updates the value in its own state,
          and this state is then used to update the component. Controlled
          components provide a more predictable behavior, as you have full
          control over the state of the component.
        </p>
      </div>

      
      <div>
      <h3 className="collapse-title text-2xl font-medium">
      How to validate React props using PropTypes
      </h3>
      <p className="text-xl">There are many types of Prop Validation. <br />
          any : The prop can be of any data type. <br />
bool : The prop should be a Boolean. <br />
number : The prop should be a number.   <br />
string : The prop should be a string. <br />
func : The prop should be a function. <br />
array : The prop should be an array. <br />
object : The prop should be an object. <br />
<br />
 PropTypes is a built-in library in React that allows you to specify the type and shape of props that a component should receive. This helps you catch errors early by validating the props that are being passed to a component at runtime.</p>
      </div>

      <div>
      <h3 className="collapse-title text-2xl font-medium">
      Difference between nodejs and express js.
      </h3>
      <p className="text-xl">Node.js provides a JavaScript runtime that can be used to build server-side applications.Node.js provides a set of core modules that can be used to build server-side applications.Node.js can be used to build any type of server-side application, including web, mobile, and desktop applications.Node.js is low-level and requires more configuration to build a complete application. <br /> <br />
          Express.js is a web application framework that provides additional features to simplify the process of building web applications on top of Node.js.Express.js, on the other hand, provides additional features such as routing, middleware, and templating.Express.js, however, is primarily used for building web applications.Express.js provides an abstraction layer on top of Node.js, making it easier to build web applications.
          </p>
      </div>

      <div>
      <h3 className="collapse-title text-2xl font-medium">
      What is a custom hook, and why will you create a custom hook?
      </h3>
      <p className="text-xl">In React, a custom hook is a JavaScript function that uses React hooks (such as useState, useEffect, useContext, etc.) to provide a certain behavior or functionality that can be shared across multiple components. Custom hooks allow developers to extract reusable logic from components and promote code reuse and maintainability. <br />
          Custom hooks can be created to handle various tasks, such as managing form state, implementing infinite scrolling, fetching data from an API, or handling authentication. By creating a custom hook, you can encapsulate complex logic into a reusable function and make it available to multiple components without repeating the same code over and over again.
          </p>
      </div>
      </div>
   
  );
};

export default PDF;
