1.  Create  an app

	meteor create simple-todos-react

	cd simple-todos-react

	meteor

	http://localhost:3000

2. Defining views with React components

	meteor add react

	1. An App React component
	2. A Task React component
	3. Some code wrapped inside if (Meteor.isClient ) {...}, which defines code to execute in the browser, and Meteor.startup, whick knows how to call code when the page is loaded and ready.

	* HTML files define static content

	head->head,  body->body

	Everything inside <template> tags is compiled into Meteor templates, which can be included inside HTML with {{>  templateName}} or  referenced in your JavaScript with Template.templateName,

	* Define view components with React

	In React, view components are classed defined with React.createClass. Your component can have any methods you like, but there are several methods such as render that have special functions.

	Components can also receive data from their parents through attributes callled props. We'll go over some of the more common features of React in this tutorial; You can also check out [Facebooks' React tutorial](https://facebook.github.io/react/docs/tutorial.html)


	* Return markup from the render method with JSX

	The most important method in every React components is render(), which is called by React to get a description of the HTML that this component should display, The HTML content is written using a JavaScript extension called JSX, which kind of looks like writing HTML inside your

	JavaScript. Your can see some obvious differences already: in JSX , you use the className attribute instead of class. An important thing to know about JSX is that it isn't a templating language like Spacebars or Angular- it actually compiles directly to regular JavaScript, Read more about JSX [in the React docs](https://facebook.github.io/react/docs/jsx-in-depth.html)

	* JSX files can use ES2015 features

	[Luke Hoban's "ES6 features"](https://github.com/lukehoban/es6features#readme)

	[Kyle Simpson's "your don't know JS: ES6 and beyond"](https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20%26%20beyond)

	[Nikonlas C.Zakas "understanding ECMAScript6"](https://github.com/nzakas/understandinges6)


3. Storing tasks in a collection

	Creating a new collections is as easy as calling MyCollection = new Mongo.Collection("CollectionName");  in your JavaScript. On the server , this setup up a MongoDB collection called CollectionName; on the client, this craetes a cache connected to the server collection ;

	* Using data from a collection  inside a React component

	To use data from a Meteor collection inside a React component, include the ReactMeteorData mixin in a component. With this mixin in your component, you can define a method called getMeteorData which knows how to keep track of chanegs in data.

	The object you return from getMeteorData can be accessed on this.data inside the render method.


4. Adding tasks with a form

	You can see that the form elements has an onSubmit attribute that references a method on the component called handleSubmit. In React , this is how your listen to browser events. like the submit event on the form, The input element has a ref property which will let us easily access this element later.

	In React you handle DOM  events by directly referencing a method on the component, Inside the event handler, you can reference elements from the component by giving them a ref  property and using React.findDOMNode. Read more about the differenct kinds of events React supports ,and how the event system works, in the

	[React Docs](https://facebook.github.io/react/docs/events.html)

5. Checking off and deleting tasks

	React.render->ReactDOM.render, React.findDOMNode->ReactDOM.findDOMNode

6. Deploying your app

	meteor deploy hujb2012.meteor.com