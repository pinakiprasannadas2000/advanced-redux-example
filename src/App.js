import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import {
  fetchCartData,
  sendCartData,
} from "./store/cart_slice/cart_action_creators/cart_actions";

let isInitial = true;

function App() {
  const dispatchFunction = useDispatch();

  const showCart = useSelector((state) => {
    return state.ui.cartIsVisible;
  });

  const cart = useSelector((state) => {
    return state.cart;
  });

  const notification = useSelector((state) => {
    return state.ui.notification;
  });

  useEffect(() => {
    dispatchFunction(fetchCartData());
  }, [dispatchFunction]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatchFunction(sendCartData(cart));
    }
  }, [cart, dispatchFunction]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
