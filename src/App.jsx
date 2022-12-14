import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        {/* <Route path="/success">
          <Success />
        </Route> */}
        <Route path="/login">
          {/* {user ? <Redirect to="/" /> : <Login />} */}
          <Login/>
          </Route>
        <Route path="/register">
          {/* {user ? <Redirect to="/" /> : <Register />} */}
          <Register/>
        </Route>
        <Route >
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;