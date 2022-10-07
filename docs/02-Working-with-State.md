# 02 Working with States


## React-Bootstrap

Before we take a deeper dive into React state, let's first learn something about **Bootstrap**.

Building front-end website with HTML and pure CSS is sometimes difficult and time-consuming. As a result, there are many open-source libraries that can simplify the developement.

Bootstrap is one of the most popular framework for developing responsive UI design. In this tutorial, we will use some of the exising component in the `react-bootrap` library to develop beautiful UI very quickly.

### Installation

The first step is to install the dependencies for `react-bootstrap` with npm. Run the following command in your terminal:

```
npm install react-bootstrap bootstrap
```

You also need to import the Bootstrap CSS into your project. Add this line of codes into your `App.js` file:

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

### Adding a Carousel

Now, we can add some components from Bootstrap. Let's add a carousel first. It is a slideshow component for cycling through images or slides of text. You can check the document at https://react-bootstrap.github.io/components/carousel/

Create a new component called `CarouselFade.js` under the `components` folder and paste the following codes from the official document. This will display a carousel with a fade transition:

```js
import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
```

The modified version of our custom carousel is like this:

```js
import Carousel from "react-bootstrap/Carousel";
import styles from "./CarouselFade.module.css";
import image1 from "../assets/carousel-img-1.png";
import image2 from "../assets/carousel-img-2.png";
import image3 from "../assets/carousel-img-3.png";

function CarouselFade() {
  return (
    <Carousel fade={true} interval={1000} className={styles.carousel}>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;
```

```css
.carousel {
    width: 100%;
}

.carousel img {
    height: 400px;
    object-fit: cover;
}
```
Please remember to put the images into a new folder called `assets` under `src`. You can find them in the project folder.

After you finish these codes, it's time to put it on our home page. You may try to do it yourself as an exercise. Feel free to reference the final codes if you get stuck.

A slideshow like this requires a lot of work on development. Import a component from Bootstrap library makes things much easier.

We can customize the time interval of transition animation with the `interval` attribute. We can also change the animation style with attributes like `fade`. For more information about the APIs of the component, you can reference the official document: https://react-bootstrap.github.io/components/carousel/

### Adding a Pagination

Our current prduct list shows too many produt in one page. We are going to add a pagination component in this section to solve this problem, which can divide the whole product list into several pages.

The first thing is always about reading the official document: https://react-bootstrap.github.io/components/pagination/. Let's take a look at the official example first:

```js
import Pagination from 'react-bootstrap/Pagination';

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const paginationBasic = (
  <div>
    <Pagination>{items}</Pagination>
    <br />

    <Pagination size="lg">{items}</Pagination>
    <br />

    <Pagination size="sm">{items}</Pagination>
  </div>
);

render(paginationBasic);
```

The `Pagination` component represents the whole pagination component, inside of which there are several `Pagination.Item` component displaying each block of the page number. It uses a for-loop to push all the pagination item componenet as a list, just like what we did in the previous **Lists** section. The `active` varaible is defined as the current page number.

For each `Pagination.Item` component, the `key` attribute stands for the key number of this item. When the value of the `active` attribute is true, the component will be styled as a selected pagination item. So, in this example, the active page is always page 2.

Now, let's put it into our project. You may try to finish it yourself first. The complete code is shown below:

```js
import React from "react";
import ProductItem from "../../components/ProductItem";
import CarouselFade from "../../components/CarouselFade";
import classes from "./Home.module.css";
import data from "../../productsData";

import Pagination from "react-bootstrap/Pagination";

function Home() {
  // Variables for the pagination
  let active = 1;
  let items = [];
  // Let's say that each page contains 6 items
  const limit = 6;
  // Compute the number of pages from the number of products
  const pageNum = Math.ceil(data.length / limit);
  // Create a list of Pagination.Item
  for (let number = 1; number <= pageNum; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  // Create the Pagination component
  const Pagination = <Pagination size="lg">{items}</Pagination>;

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

  // Put the pagination below product list.
  return (
    <div className={classes.home}>
      <div className={classes.container}>
        <CarouselFade />
        <h1>Our Products</h1>
        <div className={classes.productsContainer}>{productsList}</div>
        {Pagination}
      </div>
    </div>
  );
}

export default Home;
```

You should see a Pagination showing two pages at the bottom of our home page. But currently, it is just a static UI without any functionalities. In the following sections, we will learn how to generate some interactive elements in our project by learning about two core concepts of React: state and hooks.

## Managing States with "useState" Hook

"State" means any data or properties that need to be tracking in your application. Let's first look at a simple example:

```js
import React from "react";

function Counter() {
  let count = 0;

  return (
      <button>You have clicked {count} times.</button>
  );
}

export default Counter;
```

Here, we want to make a counter that counts the number of clicks the button from user. The application should be working like this:

1. Handle the click event from user
2. Change the value of `number`
3. Re-render the component to update the number displayed

The React-style way of doing these tasks is using the `useState` Hook. Let's take a look at the codes first:

```js
import React from "react";
import { useState } from "react";

function Counter() {
  // Initilize the count state with 0
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    // Update the value by adding one
    setCount(count + 1);
  };

  return (
    // Add clickHandler to the button
    <button onClick={clickHandler}>You have clicked {count} times.</button>
  );
}

export default Counter;
```

First, we should use the `useState` hook to initilize the state of count. 

The `useState` hook receives one argument: the initial state. Here, we initilze the `count` state as a 0 number. You can also initialize it in other types, such as string or object.

The `useState` hook will return a pair of values: the current state and a function that can update it. In this example, we get a `count` state with a value of 0 and the `setCount` function that updates it. The value received by the `setCount` function will be the updated value of the state.

Then, we can use the `setCount` function to describe the actions after the user clicks the button. Here, the `onClick` attribute of the button must receive a function varaible as the event handler, so we can define a handler function `clickHandler` first. We let the handler function update the value of count by adding one with `setCount`.

Instead of pass a specific value to `setCount` function, you can also pass a function. This is often used to gurantee the state is changed strictly based on the previous state:

```js
  const clickHandler = () => {
    setCount(prevState =>  prevState + 1);
  };
```

After the value of `count` is change by `setCount`, React will re-render the page with the new value. 

The magic of React is it will evaluate the differences and only re-render the parts that are changed instead of rebuilding the whole page, which lowers the cost and makes things faster. This is because React applys the virtual DOM to compare the differences between versions. Please reference the official documentation if you are intereted in the internals of React.

### Adding State to Pagination

Now, it's time to add state management to our Pagination componenet. It is quite challenging but still you can have a try first.

Let's build it step by step.

The first thing we need to do is convert the original `active` variable to a React state. Let's name it as `page` to avoid confusion. 

```js
const [page, setPage] = useState(1);
```

When when click on a `Pagination.Item`, it should set the page number to the key number shown on it, which is defined during the for loop. Therefore, we can write the codes like this:

```js
for (let number = 1; number <= pageNum; number++) {
  items.push(
    <Pagination.Item key={number} active={number === page} onClick={() =>  setPage(number)}>
      {number}
    </Pagination.Item>
  );
}
```

Note that, for different `Pagination.Item` generated by the loop, the handler function passed by `onClick` has different value of `number`, so that each pagination item is binded with its page number.

The next thing we need to do is make the product list react to the changes of page number. We can simpliy do a slicing to the data list according to the value of `page`. Here's how it works: 

```js
// Compute the start position of the products that should be shown in current page
const start = 0 + (page - 1) * limit;
const currentData = data.slice(start, start + limit);

const productsList = currentData.map((data) => (
  <ProductItem
    key={data.id}
    id={data.id}
    name={data.name}
    author={data.author}
    price={data.price}
    imgSrc={data.imgSrc}
  />
));
```

At last, remember that it is preferred to build you custom component and make it reusable, which can also bring simplicity and readablility to our codes. We can define our customized Pagination componenet as follows:

```js
import React from "react";
import { Pagination } from "react-bootstrap";

function PaginationBasic(props) {
  let items = [];
  for (let number = 1; number <= props.pageCount; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === props.page}
        onClick={() => props.setPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Pagination size="lg">{items}</Pagination>
    </div>
  );
}

export default PaginationBasic;
```

You may notice that we need to pass three props to this component: `pageCount`, `page` (the active page), and the `setPage` function. We should pass these props from `Home.js`:

```js
import React, { useState } from "react";
import ProductItem from "../../components/ProductItem";
import CarouselFade from "../../components/CarouselFade";
import PaginationBasic from "../../components/PaginationBasic";
import classes from "./Home.module.css";
import data from "../../productsData";

function Home() {
  // Initialize the state indicating the active page
  const [page, setPage] = useState(1);
  // Each page contains 6 items
  const limit = 6;
  // Compute the number of pages from the number of items
  const pageCount = Math.ceil(data.length / limit);

  // Compute the products should be shown in current page
  const start = 0 + (page - 1) * limit;
  const currentData = data.slice(start, start + limit);

  const productsList = currentData.map((data) => (
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
        <CarouselFade />
        <h1>Our Products</h1>
        <div className={classes.productsContainer}>{productsList}</div>
        <PaginationBasic pageCount={pageCount} page={page} setPage={setPage}/>
      </div>
    </div>
  );
}

export default Home;
```

If we want to change the number of products shown in one page, or create the same pagination for other pages, we don't need to change the codes inside the `PaginationBasic.js`.

You may notice a very interesting thing: the parent component `Home` tells the current active page number to the `PaginationBasic` component through the `page` prop, while the child component `PagniationBasic` tells its parent component `Home` that the page number is changed by calling the `setPage` function prop. This is a very common way of building a two-way communication between a pair of parent and child components.

However, this approach of passing information is sometimes verbose and inconvenient if you have to pass them through many components in the middle. Another case is that sometimes many components need to access the same global data. We will see how we can solve this problem in the next tutorial.

The complete code of Tutorial 2: https://github.com/lvyin1122/ecommerce-tutorial-code/tree/02-working-with-state