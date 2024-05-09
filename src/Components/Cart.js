import { useDispatch, useSelector } from "react-redux";
import MenuCategoryItems from "./MenuCategoryItems";
import { clearCart } from "../Utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearcart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center">
      {cartItems.length >= 1 && (
        <div>
          <div className="my-4 text-2xl font-semibold">Your Cart</div>
          <button
            className="text-left  p-2 bg-red-500 text-white rounded-lg hover:shadow-xl"
            onClick={handleClearcart}
          >
            Clear Cart
          </button>
        </div>
      )}

      <div className="w-2/4 m-auto">
        <MenuCategoryItems items={cartItems} />
      </div>
      {cartItems.length === 0 && (
        <div className="mt-20">
          <h1 className="text-xl mb-2">Your cart is empty</h1>
          <h4 className="text-sm">
            You can go to home page to view more restaurants
          </h4>
          <button className="mt-10 p-2 rounded-md text-white bg-pink-400 hover:shadow-xl">
            <Link to="/">SEE RESTAURANTS NEAR YOU</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
