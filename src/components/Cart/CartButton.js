import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui_slice/ui_slice";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatchFunction = useDispatch();
  const cartQuantity = useSelector((state) => {
    return state.cart.totalQuantity;
  });

  const toggleCartHandler = () => {
    dispatchFunction(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
