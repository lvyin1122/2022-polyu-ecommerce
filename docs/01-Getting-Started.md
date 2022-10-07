# 01 Getting Started with React.js

In this tutorial, you will learn React by building an e-commerce website step-by-step.

Each of the section covers a concept of React. You will first be given some simple examples of the concept from React. Then you will learn how it will help us to build specific function in the application.

There are two ways of learning this tutorial. You can either write the codes with the tutorial step-by-step, or jump to read the complete codes first and go back to this tutorial when you get stuck with some points. The complete code is given at the end of each tutorial.

## React Introduction

React is a open-srouce front-end JavaScript library for building user interfaces, developed and maintained by Facebook.

As a modern front-end framework, React can boost the process of development with the following advantages:

- Declarative
- Easy to learn and use
- Reusable components
- Cross-platform

## Getting Started

### Create a React Project

First, make sure you have installed Node.js and npm for package management.

You can create your first React application by running this commmand with `create-react-app`:

```terminal
npx create-react-app ecommerce
```

Here we name the project as `ecommerce`.

### Run the React Application

Now, you can move to the directory and run the application.

```
cd ecommerce
npm start
```

Your browser will pop up a new window called React App. You can also access the website with the address `localhost:3000`.



## JSX

JSX is a syntax extension to JavaScript.

In React, we usually use JSX to describe what the UI should look like instead of using pure HTML. It allows us to write HTML directly in JavaScript. Also, we can use JavaScript expressions inside the HTML elements.

In the initial project we just created, we can find a file called `App.js` under the `src` directory.

```javascript
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

Here, `App` is called a React component. It returns what we will see on the screen by `return`.

The whole value returned by `App` is written with JSX. Let's modify it to a simplier example:

```js
function App() {
  const hello = "Hello World!"
  return (
    <div>
      <h1>{hello}</h1>
    </div>
  );
}

export default App;
```

Now, you should see "Hello World!" on your website.

The advantage of JSX is that we can use any JavaScript expression inside JSX by wrapping it with curly braces. Here, we define a `hello` string variable and insert it with JSX.

We can also write it like this, which is equivalent:

```js
function App() {
  const hello = "Hello World!";
  const element = <h1>{hello}</h1>;
  return (
    <div>
      {element}
    </div>
  );
}

export default App;
```

## Components and Props

Components are one of the core concepts of React. They are the foundation upon which you build your user interface.

Component allows you to combine your HTML, CSS styling, and JavaScrtip into one custom reusable UI element.

Let's build our first component of the ecommerce applcation: a top navigation bar.

First let's create a new directory: `src\components\`. We will put all the created components in this folder.

Now, let's create a new JavaScript file called `Navbar.js`.

```js
import React from "react";

function Navbar() {
  return (
    <div>
      <div>iBookStore</div>
      <div>Cart</div>
    </div>
  );
}

export default Navbar;
```

In this file, we create a new component called Navbar and export it. Now, we can directly use it in `App.js`.

```js
import Navbar from "./components/Navbar"

function App() {
  return (
    <div>
      <Navbar/>
    </div>
  );
}

export default App;
```

Remember to import your custom component before you use it.

We can also pass values to a component with props. Components are like functions, and props are like the inputs to the function. It allows communication between React components.

Let's use props in `Navbar.js`:

```js
function Navbar(props) {
  return (
    <div>
      <div>{props.brand}</div>
      <div>Cart</div>
    </div>
  );
}
```

We can pass the value of the brand name to `Navbar` component by adding a `brand` attribute to `<Navbar />` in `App.js`:

```js
import Navbar from "./components/Navbar"

function App() {
  return (
    <div>
      <Navbar brand="iBookStore"/>
    </div>
  );
}

export default App;
```

Now, if we want to modify the brand name or create another website with the same nagivation bar, we don't need to change the codes in `Navbar.js`. This is how components and props make it resuable and improve the development. We will learn more about it in next tutorials.

## CSS Styling

Currently, our `Navbar` only shows two lines of texts. To make it look like a navigation bar, we need to style it with CSS.

In React, there are many ways to add styling information to the elements. In our project, we will choose a more common and convenient method: CSS modules.

Create a new file called `Navbar.module.css` and paste the following codes:

```css
.navbar {
  height: 50px;
  background-color: #000080;
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
}

.brand {
  font-weight: 500;
  font-size: large;
  cursor: pointer;
  text-decoration: none;
  color: white;
}

.cart {
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  color: white;
}

```

Now, let's import these styling information to the `Navbar` component

```js
import React from "react";
import classes from "./Navbar.module.css";


function Navbar(props) {
    return (
      <div className={classes.navbar}>
        <div className={classes.brand}>{props.brand}</div>
        <div className={classes.cart}>Cart</div>
      </div>
    );
  }

export default Navbar;
```

Here, we first import the stylesheet as a `classes` variable. Then we assign the CSS classes to corresponding element as attributes. For example, if we want to assign the `navbar`, we just write `className={classes.navbar}`.

Now, we have got a neat navigation bar on the top of our website.

## Lists

Sometimes, we need to render a list of elements with React. In this section, we will learn how to build a product list with components and loop.

First, let's create a `ProductItem` component under the `components` file:

```js
import React from "react";
import styles from "./ProductItem.module.css";

function ProductItem(props) {
  return (
    <div className={styles.productItem}>
      <img src={props.imgSrc} alt="" />
      <div className={styles.productInfo}>
        <h1>{props.name}</h1>
        <div className={styles.infoBottom}>
          <div className={styles.infoLeft}>
            <span className={styles.author}>{props.author}</span>
            <span className={styles.price}>{props.price}</span>
          </div>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
```

This component is used to display useful information about one product item. You can see the values of these information, such as product name and product price, are passed with props.

Next, paste the following styling codes to a new file called `ProductItem.module.css`. You may look up the details if you want to learn more about CSS.

```css
.productItem {
    box-shadow: 0 .5rem 1.5rem rgba(0,0,0,.1);
    max-height: 383.5px;
}

.productItem img {
    width: 100%;
    height: 240px;
    object-fit: cover;
}

.productInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 20px 20px 20px;
    gap: 10px;
}

.productInfo h1 {
    width: 100%;
    height: 54px;
    margin: 0;
    font-size: 20px;
    text-decoration: none;
    font-weight: 600;
    color: black;
}

.author {
    font-size: small;
}

.price {
    font-size: 20px;
    font-weight: 500;
}

.infoBottom {
    display: flex;
    flex-direction: row;   
    justify-content: space-between;
    align-items: center;
}

.infoBottom button {
    flex: 2;
    color: white;
    font-size: medium;
    font-weight: 600;
    padding: 10px 20px;
    border: none;
    border-radius: .1rem;
    cursor: pointer;
    text-decoration: none;
    background-color: #000080;
}
.infoLeft {
    flex: 3;
    display: flex;
    flex-direction: column;
}
```

Before we build the product list, we should add some fake prduct data to display. In a real application, the data is retrieved from back-end server. Here, we just put these data into a separate JavaScrtip file under the `src` folder. Let's call it `productsData.js`:

```js
const data = [
    {
      id: 0,
      name: "React: From Beginner to Expert",
      author: "John Doe",
      price: 9.99,
      imgSrc:
        "https://cdn.thenewstack.io/media/2022/05/600b72f9-react-1024x680.png",
    },
    {
      id: 1,
      name: "Neural Networks from Scratch",
      author: "John Smith",
      price: 9.99,
      imgSrc:
        "https://7wdata.be/wp-content/uploads/2020/11/What-is-an-Artificial-Neural-Networks.png",
    },
    {
      id: 2,
      name: "JavaScript: The Complete Guide",
      author: "Stephen Lee",
      price: 9.99,
      imgSrc:
        "https://repository-images.githubusercontent.com/229449376/3cfde400-5298-11ea-9f39-aab161ef8f69",
    },
    {
      id: 3,
      name: "NodeJS Bootcamp",
      author: "John Doe",
      price: 13.99,
      imgSrc:
        "https://www.hkcodingclub.com/wp-content/uploads/2022/02/share-nodejs-logo-1024x536.png",
    },
    {
      id: 4,
      name: "The Complete iOS Development Bootcamp",
      author: "John Doe",
      price: 9.99,
      imgSrc: "https://miro.medium.com/max/730/1*ND2d6CvH-Cz0dp5I_tYalQ.png",
    },
    {
      id: 5,
      name: "Python: Zero to Mastery",
      author: "John Doe",
      price: 10.99,
      imgSrc:
        "https://bytesofintelligence.co.uk/wp-content/uploads/2021/06/python.jpeg",
    },
    {
      id: 6,
      name: "Example7",
      author: "John Doe",
      price: 13.99,
      imgSrc:
        "https://www.hkcodingclub.com/wp-content/uploads/2022/02/share-nodejs-logo-1024x536.png",
    },
    {
      id: 7,
      name: "Example8",
      author: "John Doe",
      price: 9.99,
      imgSrc:
        "https://www.hkcodingclub.com/wp-content/uploads/2022/02/share-nodejs-logo-1024x536.png",
    },
    {
      id: 8,
      name: "Example9",
      author: "John Doe",
      price: 10.99,
      imgSrc:
        "https://www.hkcodingclub.com/wp-content/uploads/2022/02/share-nodejs-logo-1024x536.png",
    },
  ];
  
  export default data;
  
```

Now, we can finally build our product list. Let's create a componenet called `Home` to describe the home page and put the product list into it.

```js
import React from "react";
import ProductItem from "../../components/ProductItem";
import classes from "./Home.module.css";
import data from "../../productsData";

function Home() {
  const productsList = data.map((data) => (
    <ProductItem
      key={data.id}
      id={data.id}
      name={data.name}
      author={data.author}
      price={data.price}
      imgSrc={data.imgSrc}
    />
  ));

  return (
    <div className={classes.home}>
      <div className={classes.container}>
        <h1>Our Products</h1>
        <div className={classes.productsContainer}>{productsList}</div>
      </div>
    </div>
  );
}

export default Home;
```

Paste these codes into `Home.module.css`:

```css
.home {
    display: flex;
    justify-content: center;
}

.container {
    width: 100%;
    max-width: 1024px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 32px;
    min-height: 100vh;
}

.productsContainer {
    width: 100%;
    min-height: 787px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
    grid-auto-rows: minmax(100px, auto);
}
```

The JavaScript `map()` method is generally the preferred way to render the list in React. In this example, we render the product data by mapping each of the product to one `ProductItem` component. We also pass all the information with props.

Remember, when you use the `map()` method to create a list, you must specify the `key` attribute to allow React to keep track of elements in lists.

Now, you should see a  product list shown in the home page.

The complete code of Tutorial 1: https://github.com/lvyin1122/ecommerce-tutorial-code/tree/01-getting-started