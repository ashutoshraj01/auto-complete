### What is the difference between Component and PureComponent? Give an example where it might break my app.

PureComponent is one of the most significant ways to optimize React applications. By using the pure component, there is no need for shouldComponentUpdate() Lifecycle Method as ReactJS Pure Component Class compares current state and props with new props and states to decide whether the component should re-render or Not.

But on the other hand, Component re-renders itself every time the props passed to it changes, parent component re-renders or if the shouldComponentUpdate() method is called. It doesn’t optimize the React application. They are easy and fast to implement and also are good for very small UI views where a re-render wouldn’t matter that much. They provide cleaner code and fewer files to deal with.

Using children prop in pure component can break the application.
In JSX expressions that contain both an opening tag and a closing tag, the content between those tags is passed as a special prop: props.children. As it is a prop it will be used by the PureComponent shallow comparison to determine if the component needs to be re-render.
When the Container component re-render, it will re-render also the ChildRenderer components having HTML or components as children, because <span>This is html</span> is equivalent to createElement(...) , and this returns a new instance that will fail the shallow comparison of ChildRenderer pure component. The simple text will not re-render ChildRenderer because the shallow comparison of string returns true.

### Context + ShouldComponentUpdate might be dangerous. Why is that?

When we update state inside ShouldComponentUpdate, it get stucks in endless loop as ShouldComponentUpdate return a boolean value & based on the render function is called since we are updating state inside of it, it will always find the value as true & thus will break the application.

Context does not "store" anything. The parent component that makes a MyContext.Provider> is in charge of determining what value is passed into the Context, which is usually determined by React component state. The useState/useReducer hook is where the real "state management" happens. Context is how a state (which already exists somewhere) is shared with other components,Context simply allows one to bypass the prop-drilling.


### Describe ways to pass information from a component to its PARENT.

Pass a function as a prop to the Child component.
Call the function in the Child component and pass the data as arguments.
Access the data in the function in the Parent.

Using Redux and Context.


### Give 2 ways to prevent components from re-rendering.

Memoization using useMemo() and UseCallback() Hooks.
Replacing useState() with useRef().

### What is a fragment and why do we need it? Give an example where it might break my app.

React Fragment is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM. To return multiple elements from a React component, you'll need to wrap the element in a root element. 
eg:- <React.Fragment>
      <h1> This is heading1</h1>
      <p> This is paragraph </p>
      <h2> This is another heading </h2>
      </React.Fragment>
      
<Fragment /> Does not actually add a DOM node, just a virtual DOM container. Unfortunately container components in ui frameworks deal with arrays of child components like in <StyledMenu /> so the fragment will interfere with how this component works. It does stuff to the immediate child which in this case is a fragment and not an li so it applies classes to that and then it is stripped out of the dom because its a fragment.

### Give 3 examples of the HOC pattern.

Helpful in Logic reuse.
1. Toggle Functionality
2. Styling to components
3. Adding authorization to the component


### What's the difference in handling exceptions in promises, callbacks and async…await?

In Callbacks
- The first argument of the callback is usually named error, whereby if something goes wrong in the asynchronous function, then the callback gets called with the first argument which specifies what error has happened. If everything goes well, then the first argument will be null.

In Promises
We use .then & .catch method. chaining of these methods can also be done.

In Async await
We use try catch block 


### How many arguments does setState take and why is it async ?

The setState method takes up to 2 arguments.
ReactJs sets its state asynchronously because it can result in an expensive operation. Making it synchronous might leave the browser unresponsive. Asynchronous setState calls are batched to provide a better user experience and performance.


### List the steps needed to migrate a Class to Function Component.

- Import react hooks
- create a default exported function which return the JSX.
- instead of lifecycle methods use useEffect.


###  List a few ways styles can be used with components.

- Inline CSS
- Normal CSS.
- CSS in JS.
- Styled Components.
- CSS module.

### How to render an HTML string coming from the server
By using dangerouslySetInnerHTML attributes to render your html strings.


