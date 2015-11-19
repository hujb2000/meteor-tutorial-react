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




