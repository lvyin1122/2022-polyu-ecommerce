# 03 Building a Cart using Context

In Tutorial 3, you'll take a glance at four significant concepts of React by building the shopping cart feature in our application:

1. React router
2. useContext
3. useReducer

## React router

React Router is the standard library used in React to change views and navigate between pages. For a large web applicatoin, the page routing could be very complicated. In this section, we will build a shopping cart page using React Router.

### Installation

Run this command in your terminal to install the React Router dependencies.

```
npm install react-router-dom
```

### Routes

Now, we will use Router to route to pages based on URL. Let's modify our `App.js`:

```js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar brand="iBookStore" />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

First, we wrap our `App` component with `<BrowserRouter>`. Then, we define a `<Routes>`. An application can have multiple `<Routes>`. Here we only need to use one. The `<Navbar>` component is placed outside the `<Routes>` because we want every page have the same navigation bar.

Inside `<Routes>`, we can define multiple pages with different URL addresses. Now, we only have one `<Route>` which renders the `Home` component at root path `/`.

### Cart Page

Now, let's add a new page for our shopping cart. We need four files to complete the page:

- `Cart.js`
- `Cart.module.css`
- `CartItem.js`
- `CartItem.module.css`

`Cart.js`
```js
import React from "react";
import CartItem from "../../components/CartItem.js";
import styles from "./Cart.module.css";
import data from "../../productsData.js";

function Cart() {
  const cartList = data.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      author={item.author}
      price={item.price}
      imgSrc={item.imgSrc}
    />
  ));

  return (
    <div className={styles.cart}>
      <h1>My Shopping Cart</h1>
      <ul className={styles.cartList}>{cartList}</ul>
    </div>
  );
}

export default Cart;
```
`CartItem.js`
```js
import React from "react";
import styles from "./CartItem.module.css";

function CartItem(props) {
  return (
    <li className={styles.cartItem}>
      <img src={props.imgSrc} alt="" />
      <div className={styles.center}>
        <h3>{props.name}</h3>
        <p>By {props.author}</p>
      </div>
      <div className={styles.right}>
        <span>${props.price}</span>
        <span className={styles.remove}>Remove</span>
      </div>
    </li>
  );
}

export default CartItem;
```

Here, we directly import the fake data that contains all the products for demonstration. We will refine it later. You can also find the CSS files with the project link.

Now, we can route to the cart page with the path `/cart`. The codes are quite straight forward:

```js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar brand="iBookStore" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### Link Component

`<Link>` is a component that lets the user navigate to another page by clickling on it. We can easily improve our `Navbar.js` like this:

```js
import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.brand}>
        {props.brand}
      </Link>
      <Link to="/cart" className={styles.cart}>
        Cart
      </Link>
    </div>
  );
}

export default Navbar;
```

Now, when we click on the brand, we can navigate to the home page. When we click on the "Cart", we will move to the cart page.

## useContext

Currently, the data in your shopping cart is hard-coded. We are gonna fix it with context and the `useContext` hook, which allows us to store and manage global information accross pages and components.

The concepts involved in the following sections will be a little bit hard to understand. You are suggested to do it step-by-step.

The first thing to do is create a context called `CartContext` with `React.createContext()`. Let's create a file called `cart-context.js` and put it under a new directory `src/store`. The codes are like this:

```js
import React from "react";

const CartContext = React.createContext();

export default CartContext;
```

Next, we should define the data that we want to share with the context. We can simpliy initialize the data as some variables. But the common case is we also want to change it afterwards. So we should use `useState()` hook to create both the state and the update function.

Another concept is called **provider**. A provider is a wrapper component that makes every child components of it be able to access the data stored in the context. Let's define the provider for `CartContext`:

```js
import { createContext, useState } from "react";

// Create the cart context
const CartContext = createContext();

// Define initial state for cart items
const initialCartState = [
  {
    id: 0,
    name: "React: From Beginner to Expert",
    author: "John Doe",
    price: 9.99,
    imgSrc:
      "https://cdn.thenewstack.io/media/2022/05/600b72f9-react-1024x680.png",
  },
];

// Define CartProvider component
export function CartProvider(props) {
  // Apply useState hook to update the state of the cart
  const [cartState, setCartState] = useState(initialCartState);

  return (
    <CartContext.Provider value={cartState}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
```

Here, we first define the cart state with a list with one sample data. Then, we pass the state to the context provider with the attribute `value`.

Now, let's put our context provider into our project:

`App.js`

```js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import { CartProvider } from "./store/cart-context";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar brand="iBookStore" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
```

We need to wrap all of the component under the `CartProvider`, so that the context can be used by any of these child componenets. Let's try to use our context in our cart page:

`Cart.js`

```js
import React from "react";
import CartItem from "../../components/CartItem.js";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context.js";
// Import the useContext hook
import { useContext } from "react";

function Cart() {
  // Import cartState using the useContext hook
  const cartState = useContext(CartContext);

  const cartList = cartState.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      author={item.author}
      price={item.price}
      imgSrc={item.imgSrc}
    />
  ));

  return (
    <div className={styles.cart}>
      <h1>My Shopping Cart</h1>
      <ul className={styles.cartList}>{cartList}</ul>
    </div>
  );
}

export default Cart;
```

We use the `useContext` hook to import the value stored in `CartContext`. In this example, we get a list of products, which is exactly the `cartState` we just defined. Now, your cart page should show the sample product data on the cart page `http://localhost:3000/cart`.

Currently, our shopping cart is still not working since the data in cart context is static. We cannot make any changes to it. Remember when we define the cart context, we use `useState` to generate a update function for cart state. We should allow other component to use it as well. A practical way is like this:

`cart-context.js`
```js
import { createContext, useState } from "react";

// Create the cart context
const CartContext = createContext();

// Define initial state for cart items
const initialCartState = [];

// Define CartProvider component
export function CartProvider(props) {
  // Apply useState hook to update the state of the cart
  const [cartState, setCartState] = useState(initialCartState);

  // Define a addCartItem function which can add a product to the cart list
  const addCartItem = (item) => {
    setCartState((prevCart) => prevCart.concat(item));
  };

  const cartContext = {
    cartState: cartState,
    addCartItem: addCartItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
```

There add three changes to the program:
1. We define a `addCartItem` that uses `setCartState` function to add a product item to the cart
2. Next, we create a object called `cartContext` containing both `cartState` and `addCartItem` function
3. Finally, we pass `cartContext` as the value of the context to the provider

Now, we have to modify how we use the context value in the cart page:

`Cart.js`
```js
const { cartState } = useContext(CartContext);
```

This will only import the value of `cartState` inside the `cartContext` object value.

Let's move on to apply the `addCartItem` function we just defined. Remember that for each of our product item, we have a "Add to cart" button. We can finally make use of them:

`ProductItem.js`
```js
import React from "react";
import styles from "./ProductItem.module.css";
import CartContext from "../store/cart-context";
import { useContext } from "react";

function ProductItem(props) {
  // Import the addCartItem function from CartContext
  const { addCartItem } = useContext(CartContext);
  // Define a handler function that add the current item to the cart
  const addCartItemHandler = () => {
    addCartItem({
      id: props.id,
      name: props.name,
      price: props.price,
      imgSrc: props.imgSrc,
      author: props.author,
    });
  };

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
          <button onClick={addCartItemHandler}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
```

Now, for each `ProductItem` shown on our home page, its "Add to cart" button will call a `addCartItemHandler` function that will add the product information to our global cart state through the `addCartItem`. You can click on these button and check the results on the cart page.

### Exercise

We have implemented a very simple shopping cart which still has a lot of problems. You should have the knowledge to fix them on your own. Give it a try and check your answer with the final codes in our project repository.

1. The "Remove" button in the `CartItem` componenet is not working. Try to add a `removeCartItem` in `cart-context` and use it in the `CartItem`. The function should receive an `id` argument and remove the corresponding product with that id from the cart state. This requires some knowlege of list manipulation using JavaScript.
2. The `addCartItem` function in `cart-context` will keep adding products that already exists in the cart. Try to modify the function to avoid duplication. 

The complete code of Tutorial 3: https://github.com/lvyin1122/ecommerce-tutorial-code/tree/03-building-a-cart-using-context

# 04 Connecting to Backend

1. Conditional rendering
2. useEffect
3. Custom Hooks

# 05 Advanced React

1. useReducer
2. localStorage
3. ...